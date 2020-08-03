import React,{useRef,useState, useEffect} from "react";
function Test (props:any) {
    const [flag, change] = React.useState(true)

    const ch =() => {
        // change(!flag)
        var dd:any = document.getElementById('ddd')
        var value = dd.style.getPropertyValue('margin'); 
        console.log('dddddd',document.body.style)
        document.body.style.setProperty('--main-ddd-color', 'gur'); 
        document.body.style.setProperty('am', 'gur'); 
    }
    // useEffect(()=> {
    //     var dd = document.getElementById('ddd')
    //     console.log('document.body.style.getPropertyValue("--main-ddd-color")',dd)
    //     // console.log('stylestylestylestylestylestyle',document.body.style.getPropertyValue("--main-ddd-color"))
    // })
    return (
        <div onClick={ch} className="mytest" id="ddd">  
            {props.children}
        </div>
    )
}
export default Test


// 完善分档提取功能，增加回显，编辑 100%
// 添加优化几个配置功能项 100%
// 修改测试问题 条件格式需求分析，页面编写 5%