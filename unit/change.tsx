interface LabelledValue {
    styleTitle: string;
    time:number;
    state:boolean;
}

const getShadowStyle = (selectorText:string,time:number,state:boolean) => {
    let ytime = Math.abs(time)
    let rotime = -time/3
    // am 0 上午 6
    let rule,xl,yl,xr,yr

    

    switch (time) {
        case 6:
            xl = -2 
            yl = 0
            xr = 6
            yr = 0
            break;
        case 7:
            xl = -2 
            yl = 0
            xr = 6
            yr = 0
            break;          
        case 8:
            xl = -2 
            yl = 0
            xr = 6
            yr = 0
            break;
        case 9:
            xl = 1
            yl = 1
            xr = 3
            yr = 6
            break;
        case 10:
            xl = 0.3 
            yl = 0.6
            xr = 2
            yr = 4
            break;
        case 11:
            xl = 0.6
            yl = 0.3
            xr = 1
            yr = 2
            break;
        case 12:
            xl = 0
            yl = 0
            xr = 0
            yr = 0
            break;
        case 13:
            xl = 0.6
            yl = -0.3
            xr = -1
            yr = 2
            break;
        case 14:
            xl = 0.3 
            yl = -0.6
            xr = -2
            yr = 4
            break;          
        case 15:
            xl = 1
            yl = -1
            xr = -3
            yr = 6
            break;
        case 16:
            xl = 1.3
            yl = -0.6
            xr = -4
            yr = 4
            break;
        case 17:            
            xl = 1.6
            yl = -0.3
            xr = -4
            yr = 2
            break;
        case 18:
            xl = 2
            yl = 0
            xr = -6
            yr = 0
            break;
        default:
            break;
    }



    
    // am 7


    // am 6 中午 12

    // xl = 0
    // yl = 0
    // xr = 0
    // yr = 2



    // // am 9  下午 3

    // xl = 1
    // yl = -1
    // xr = -3
    // yr = 6

    // //4点

    // xl = 1.3
    // yl = -0.6
    // xr = -4
    // yr = 4

    // //5点

    // xl = 1.6
    // yl = -0.3
    // xr = -4
    // yr = 2

    // // 12 下午 6

    // xl = 2
    // yl = 0
    // xr = -6
    // yr = 0

    // animation:mymove 2s linear infinite; */
    if(state) {
        rule = `${xl}px ${yl}px 3px #fff,${xr}px ${yr}px 3px grey`
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
