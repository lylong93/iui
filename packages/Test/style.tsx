// import styled from 'styled-components'
// // import './sty.scss'
// // console.log('st',st)
// interface ITextProps {
//     fg: any;
// }

// const Wrapper = styled.div
//         `
//         color: ${(props:ITextProps) => props.fg || "palevioletred"};
//         border:1px solid black
//         `

//  export default Wrapper

import './sty.scss'

// Append <style> element to <head>
var styleEl = document.createElement('style');

document.head.appendChild(styleEl);

const srapper = {
   fontSize:'20px'
}

var styleSheet:any = styleEl.sheet;

styleSheet.insertRule('.mytest { font-weight: bold }', 0);
// console.log('ddddddd',document.styleSheets)

// console.log('cssscssscsss',styleSheet)
export default srapper