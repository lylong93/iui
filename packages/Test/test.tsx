import React,{useRef,useState} from "react";
// import Wrapper from './style'
import './sty.scss'
function Test (props:any) {
    const [flag, change] = React.useState(true)
    // const Wrapper =getWr(flag)

    const ch =() => {
        change(!flag)
    }
    return (
        <div onClick={ch} className="sty__apddp___QNkWA">  
            {props.children}
        </div>
    )
}
export default Test