import React from 'react'
// import './style.scss'
// import styleClass from './style.scss.json'
import classNames from 'classnames';
import style from '../../Mzu/style';
import { relative } from 'path';
import { right } from '../../Kaleido/style';
var  styleClass = {
    
}
const w = classNames(styleClass['w'])
const s = classNames(styleClass['s'])

function IC () {
    React.useEffect(()=> {
        var canvas:any = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(103, 151, 131)"
        ctx.fillRect (0, 0, 1200, 1200);

    })
    return (
        // <div className={w}>
        //     <div className={s}>
        //         首页
        //     </div>
        // </div>
        <div style={{
            width:'100%',
            height:'100%',
            position:'relative'
        }}>
            <canvas id="canvas" width="150px" height="1200px"></canvas>
            <div 
            style={{
                width:'150px',
                height:'300px',
                position:'absolute',
                top:'0',
                left:'0',
                display:'flex',
                justifyContent:'center',
                padding:'20px 0'
            }}>
            <div className={w}>
                <div className={s}>
                    {/* 首页 */}
                </div>
            </div>
            </div>
        </div>
    )
}

export default IC