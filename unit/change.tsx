interface LabelledValue {
    styleTitle: string;
    time:number;
    state:boolean;
}

const getShadowStyle = (selectorText:string,time:number,state:boolean) => {
    let ytime = Math.abs(time)
    let rotime = -time/3

    let rule
    
    // animation:mymove 2s linear infinite; */
    if(state) {
        rule = `${rotime}px ${rotime}px 3px #fff,${time}px ${ytime}px 3px grey`
    }else {
        rule = ` inset -0.5px -1px 1px  #fff, inset 1px 1px 3px  grey;`
    }

    return `
        .${selectorText} 
            {box-shadow:${rule};}
        `

}
//塞入样式
export default (conf:LabelledValue) => {
    const {styleTitle,time,state} = conf
    const styleSheets = document.styleSheets
    const curSheet = Array.from(styleSheets).find(item=> {
        return item.title === styleTitle
    })

    const selectorText:string = `shadow${styleTitle}`
    const rule = getShadowStyle(selectorText,time,state)

    if(curSheet) {
        curSheet.deleteRule(0)
        curSheet.insertRule(rule,0);  
    }else {
        let styleEl = document.createElement('style');
        styleEl.title = styleTitle
        document.head.appendChild(styleEl);
        const styleSheet= styleEl.sheet;
        if(styleSheet) {
            styleSheet.insertRule(rule);
        }
    }
    return selectorText
}
