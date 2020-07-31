import React, { useEffect } from 'react'
import dd from './style'

import Mzu from '../Mzu'
import { setInterval } from 'timers'
function Button (props:any) {
    const [ddd, setName] = React.useState(true)
    let time = 6
    const {children,click,size}  = props
    let style = dd(ddd,time)

    const mousedown =() => {
        setName(false)
    }
    const mouseup =() => {
        props.click()
        setName(true)
    }
    
    // useEffect(()=> {
    //     const con = () => {
    //         time--
    //         if(time<-6) {
    //             time = 6
    //         }
    //         style = dd(ddd,time)
    //     }
    //     setInterval(con,500)
    // })
    
    return (
        <Mzu>
            <div className={style}  onMouseDown={mousedown} onMouseUp={mouseup}>
                {children}
            </div>
        </Mzu>
    )
}
export default Button