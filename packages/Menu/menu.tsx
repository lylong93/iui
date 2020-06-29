import React from 'react'
// import './index.scss'
import dd,{menuStyle,menuItemtyle} from './style'

function Menu (props:any) {
    const {children,index} = props
    return (
        <div className={menuStyle}>
            {children}
        </div>
    )
}

function MenuItem (props:any) {
    const {title} = props
    const d  = menuItemtyle(title)
    return (
        <div className={d} >
            {title}
        </div>
    )
}

Menu.item  = MenuItem

export default Menu