import React, { useState,useRef, useEffect } from 'react'
import style from './style'
const Input = () => {
    const inputRef:any= useRef()
    const [state,changeState] = useState(false)
    const {input,inputWrapper,w} = style(state)

    // const foc =() => {
    //     changeState(true)
    // }
    // const blu =() => {
    //     changeState(false)
    // }
    const d = () => {
        changeState(!state)
        if(state) {
            inputRef.current.focus()
        }
    }
    
    return (
        <div className={inputWrapper} onClick={d}>
            <div className={w} >
                <input  ref={inputRef} className={input}   type="text" placeholder="请输入" />
            </div>
        </div>
    )
}

export default Input