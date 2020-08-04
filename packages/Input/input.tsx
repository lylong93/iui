import React, { useState } from 'react'
import style from './style'
const Input = () => {
    const [state,changeState] = useState(false)
    const {input,inputWrapper,w} = style(state)
    const foc =() => {
        changeState(true)
    }
    const blu =() => {
        changeState(false)
    }
    const d = () => {
        changeState(!state)
    }
    return (
        <div className={inputWrapper} onClick={d}>
            <div className={w} >
                <input className={input} type="text" placeholder="请输入" />
            </div>
        </div>
    )
}

export default Input