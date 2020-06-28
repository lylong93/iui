import React from 'react'
import './index.scss'
import dd from './style'

function Button (props:any) {
    const [ddd, setName] = React.useState(true)
    const {name,click,size}  = props
    const style = dd(ddd)

    const mousedown =() => {
        setName(false)
    }
    const mouseup =() => {
        props.click()
        setName(true)
    }

    return (
        <div className={style}  onMouseDown={mousedown} onMouseUp={mouseup}>
            {name}
        </div>
    )
}
export default Button