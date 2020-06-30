import React from 'react'
import {scene,cube, right,top,left,bottom,front,back} from './style'
function Kaleido () {
    return (
        <div className={scene}>
            <div className={cube}>
                <div className={back}>BACK</div>
                <div className={top}>TOP</div>
                <div className={bottom}>BOTTOM</div>
                <div className={front}>FRONT</div>
            </div>
        </div>
    )
}

export default Kaleido  
