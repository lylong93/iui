import React,{useRef,useState} from "react";
import {Wrapper} from './style'

function Test (props:any) {
    const [flag, change] = React.useState(true)
    // const Wrapper =getWr(flag)

    const ch =() => {
        change(!flag)
    }
    return (
        <Wrapper onClick={ch} fg={flag}>  
            {props.children}
        </Wrapper>
    )
}
export default Test