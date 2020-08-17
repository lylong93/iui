import React,{useRef,useEffect, Children} from "react";
import style from './style'
function Slider() {
    const {wrapper,btn} = style()
    const cld =() => {
        console.log('cld')
    }
    return (
        <div  className={wrapper}>
            <div className={btn} onClick={cld}></div>
        </div>
    )
}

export default Slider   