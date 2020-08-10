import React, { useState } from 'react'
import dd from './style'
function Switch (props:any) {
    const {active,inactive,disabled} = props
    console.log('disabled',disabled)
    const [flag,change] = useState(true)
    const ch =() => {
        if(disabled){
            return
        }
        change(!flag)
    }
    
    const {wrapper,btn,tip} = dd(flag,disabled)

    return (
        <div className={wrapper}>
            <div className={btn} onClick={ch}></div>
            <div className={tip}>{
                flag ? active : inactive
            }</div>
        </div>
    )
}

export default Switch