import classNames from 'classnames';
import style from '../../style/all.scss.json'
import {change} from '../../unit'

export default (mouseStyle:any,time:number,size?:string) => {
    const conf = {
        styleTitle:'button',
        time:time,
        state:mouseStyle
    }
    const selectorText = change(conf)
    
    return classNames(style['button'],selectorText,{
        [`${style[`button_${size}`]}`]: size,
    })
}