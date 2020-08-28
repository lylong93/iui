import React, { useEffect } from 'react'
import dd from './style'
import Mzu from '../Mzu'
interface ButtonValue {
    children?: string;
    click?:any;
    size?:string
}

let time  = 15
//24
// 6-18 am  0-12
// 18-24 pm  0-12
function Button (props:ButtonValue) {
    const [mouseStyle, changeStyle] = React.useState(true)
    const [cg,ccg] =  React.useState(true)
    const {children,click,size}  = props

    let style = dd(mouseStyle,time,size)

    const mousedown =() => {
        // console.log('mousedown')
        changeStyle(false)
    }
    const mouseup =() => {
        // console.log('mouseup')
        // click()
        changeStyle(true)
    }
    // useEffect(()=> {
    //     setInterval(()=> {
    //     if(time === 18) {
    //         time = 12
    //     }
    //     time = time + 1

    //     // ccg(!cg)
    //     console.log(time)
    //     style= dd(mouseStyle,time,size)
    //     },1000)
    // })
    
    return (
        <Mzu>
            <div className={style}  onMouseDown={mousedown} onMouseUp={mouseup}>{cg}
                {children}
            </div>
        </Mzu>
    )
}
export default Button