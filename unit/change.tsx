interface LabelledValue {
    styleTitle: string;
    time:number;
}

const getShadow = (selectorText:string,time:number) => {
    let ytime = Math.abs(time)
    let rotime = -time/3
    // console.log(rotime)
    const rule = `${rotime}px ${rotime}px 3px #fff,${time}px ${ytime}px 3px grey`
    return `
        .${selectorText} 
            {box-shadow:${rule}}
        `
}

export default (conf:LabelledValue) => {
    const {styleTitle,time} = conf
    const styleSheets = document.styleSheets
    const curSheet = Array.from(styleSheets).find(item=> {
        return item.title === styleTitle
    })
    const selectorText:string = `shadow${styleTitle}`

    if(curSheet) {
        const rule = getShadow(selectorText,time)
        curSheet.deleteRule(0)
        curSheet.insertRule(rule,0);  
    }else {
        let styleEl = document.createElement('style');
        styleEl.title = styleTitle
        document.head.appendChild(styleEl);
        const styleSheet= styleEl.sheet;
        const rule = getShadow(selectorText,time)
        if(styleSheet) {
            styleSheet.insertRule(rule);
        }
    }
    return selectorText
}
