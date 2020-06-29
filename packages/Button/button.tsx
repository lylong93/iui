import React from 'react'
import './index.scss'
import dd from './style'

import Mzu from '../Mzu'
function Button (props:any) {
    const [ddd, setName] = React.useState(true)
    const {children,click,size}  = props
    const style = dd(ddd)

    const mousedown =() => {
        setName(false)
    }
    const mouseup =() => {
        props.click()
        setName(true)
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