import styled from 'styled-components'
// import './sty.scss'
// console.log('st',st)
interface ITextProps {
    fg: any;
}

const Wrapper = styled.div
        `
        color: ${(props:ITextProps) => props.fg || "palevioletred"};
        border:1px solid black
        `

 export default Wrapper