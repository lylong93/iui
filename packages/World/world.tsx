import React,{useRef,useEffect} from "react";
const my = require('./my.css')
import change  from './change';
import classNames  from 'classnames';
import btnClass from './style'
import './style.scss'
import styleClass from './style.scss.json'
import styled from 'styled-components'
console.log('btnClass',btnClass)
console.log('my',my)


const Button  = styled.div`
background: red;`

const creat = ({name}:any) => {
    const style = classNames(styleClass[name])
    return (props:any) => {
        return (
            <div className={style}>
                {/* {name==='Layout' ? '' :name} */}
                {props.children}
            </div>
        )
    }
}

function World (props:any) {
    // change()
    return (
        <div  className={btnClass}>
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
World.change = change
export default World