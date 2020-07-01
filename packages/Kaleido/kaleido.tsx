import React from 'react'
import {scene,cube,right,top,left,bottom,front,back,sss} from './style'
let timeoutID :any
function Kaleido () {   
    const [flag,set] = React.useState(false)
    const [num,chagene] = React.useState(0)
    let cube:any = sss(flag)

    const cl = () => {
        cube = set(true)
        let d  = num +90
        // if(d === 360) {
        //     d= 0
        // }
        chagene(d)
    
        timeoutID  = setTimeout(() => {
            cube = set(flag => !flag);
        }, 1000);
    }
    
    return (
        <div className={scene}>
            <div className={cube} style={{transform:`rotateY(${num}deg)`}} onClick={cl}>
                <div className={top}>TOP</div>
                <div className={bottom}>BOTTOM</div>
                <div className={front}>Front</div>
                <div className={back}>BACK</div>
                <div className={left}>left</div>
                <div className={right}>right</div>
            </div>
        </div>
    )
}
export default Kaleido  
