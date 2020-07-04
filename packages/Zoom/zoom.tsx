import React from 'react'
import style from './style'
let s = 1
function Zoom () {
    const [scale,sets] = React.useState(1)

    const d = style(false)
    const cl = (e:any) => {
        
        s += e.deltaY * -0.01;
        console.log(s)
        let d = Math.min(Math.max(.125, s), 4);
      
        sets(d)
    }
    const btnStyle2 = {
        transform :`scale(${scale})`
    };
    return(
        <div className={d}  onWheel={cl} style={btnStyle2}>
            zoom
        </div>
    )
}

export default Zoom