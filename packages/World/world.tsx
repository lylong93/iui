import React,{useRef,useEffect} from "react";
import btnClass from './style'
import './style.scss'
function  World (props:any) {
    return (
        <div className={btnClass}>
            {props.children}
        </div>
    )
} 
function Header () {
    return (
        <div>header</div>
    )
}
function Main () {
    return (
        <div>Main</div>
    )
}

function Footer () {
    return (
        <div>Footer</div>
    )
}
World.Header = Header
World.Main = Main
World.Footer = Footer

export default World