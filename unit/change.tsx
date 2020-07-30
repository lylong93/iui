interface LabelledValue {
    color?: string;
}

export default (obj:LabelledValue) => {
    let styleEl = document.createElement('style');
    styleEl.title = 'oo'
    document.head.appendChild(styleEl);
    let styleSheets = document.styleSheets

    let index  = Array.from(styleSheets).find(item=> {
        return item.title === 'oo'
    })

    
// document.head.appendChild(styleEl);

// let styleSheet:any = styleEl.sheet;

// styleSheet.insertRule('.mytest { font-weight: bold }', 0);

// console.log('ddddddd',document.styleSheets)

// console.log('cssscssscsss',styleSheet)

    console.log('index',index)
}
