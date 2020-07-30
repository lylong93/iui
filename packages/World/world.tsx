import React,{useRef,useEffect} from "react";
import st from './style'
import style from  '../../style/all.scss.json'

const creat = ({name}:any) => {
    st
    // const style = classNames(styleClass[name])
    return (props:any) => {
        return (
            <div >
                {/* {name==='Layout' ? '' :name} */}
                {props.children}
            </div>
        )
    }
}

function World (props:any) {
    return (
        <div  className={style.world}>
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