import React, { useEffect } from 'react'
import dd from './style'
import Mzu from '../Mzu'
interface ButtonValue {
    children?: string;
    click?:any;
    size?:string
}
function Button (props:ButtonValue) {
    const [mouseStyle, changeStyle] = React.useState(true)
    let time = 6
    const {children,click,size}  = props

    let style = dd(mouseStyle,time,size)

    const mousedown =() => {
        changeStyle(false)
    }
    const mouseup =() => {
        click()
        changeStyle(true)
    }
    
    return (
        <Mzu>
            <div className={style}  onMouseDown={mousedown} onMouseUp={mouseup}>
                {children}
            </div>
        </Mzu>
    )
}
export default Button