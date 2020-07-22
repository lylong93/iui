import styled from 'styled-components'
interface ITextProps {
    fg?: any;
  }

 const getWr= styled.div
        `
        color: ${(props: ITextProps) => props.fg || "palevioletred"};
        border:1px solid black
        `


  
export const Wrapper = styled.div
        `
        color: ${(props: ITextProps) => props.fg || "palevioletred"};
        border:1px solid black
        `


 export default getWr