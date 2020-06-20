import React,{useRef,useEffect} from "react";
import classNames  from 'classnames';
import btnClass from './style'
import './style.scss'
import styleClass from './style.scss.json'

const creat = ({name}:any) => {
    const style = classNames(styleClass[name])
    let falg = true
    return (props:any) => {
        return (
            <div className={style}>
                {name==='Layout' ? '' :name}
                {props.children}
            </div>
        )
    }
}

function World (props:any) {
    return (
        <div className={btnClass}>
            {props.children}
        </div>
    )
}

const Header = creat({name:'Header'})
const Main = creat({name:'Main'})
const Footer = creat({name:'Footer'})
const Aside  = creat({name:'Aside'})
const Layout  = creat({name:'Layout'})

World.Header = Header
World.Footer = Footer
World.Main = Main
World.Aside = Aside
World.Layout = Layout

export default World