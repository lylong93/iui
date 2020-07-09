import React from 'react'
import {wrapper,style,pan,one,ss,dd,tr,ttt,ins} from './style'
import { relative } from 'path'


function Tree () {
    const [falg,set] = React.useState(true)
    const [kk,sk] = React.useState(0)
    const [show,cshow] = React.useState(false)
    let st = style(falg)
    let sp = pan(falg)
    let s = ss(falg)
    let i = ins(falg)
    const cg = () => {
        set(!falg)
    }
    const ho = (key:any) => {
        cshow(true)
        sk(key)
        // setTimeout( 
        //     () => {cshow(false)}, 
        // 300)
    }
    const list = ['菜单一','菜单二','菜单三']
    // const time = [0.5,0.8,1]
    return (
        <div className={wrapper}>
            <div className={one} onClick={cg}>one</div>
            <div className={sp}>
            {
                list.map((item,key)=> {
                    if(key== kk && show) {
                        return (
                            <div key={key}  onClick={() => ho(key)}className={dd}>
                                <div className={i}>{item}</div>
                                <div 
                                    style={{
                                        height:'30px',
                                        overflow: 'hidden',
                                        zIndex:1
                                    }}>
                                    <div className={tr}>=</div>
                                    <div className={tr}>=</div>
                                    <div className={tr}>=</div>
                                    <div className={tr}>=</div>
                                    <div className={tr}>=</div>
                                    <div className={tr}>=</div>
                                    <div className={tr}>=</div>
                                    <div className={tr}>=</div>
                                    <div className={tr}>=</div>
                                </div>
                                <div
                                    className={ttt} 
                                    style={{
                                        height:'30px',
                                        width:'30px',
                                        position:'relative',
                                        left:'-2px' 
                                    }}>
                                    <img src="http://www.gxlcms.com/dome/2019-10-19/jiaoben4352/images/sec4-icon-2.png" height="100%" width="100%" />
                               </div>
                               <div
                                    className={ttt} 
                                    style={{
                                        height:'16px',
                                        width:'16px',
                                        position:'relative',
                                        left:'-2px' 
                                    }}>
                                    <img src="http://www.gxlcms.com/dome/2019-10-19/jiaoben4352/images/sec4-icon-2.png" height="100%" width="100%" />
                               </div>
                            </div>
                        )  
                    }else {
                        return (
                            <div key={key}onClick={() => ho(key)} className={dd}>
                                <div className={st}>{item}</div>
                            </div>
                        )     
                    }                 
                })
            }
            </div>
        </div>
    )
}

export default Tree