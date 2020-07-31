import classNames from 'classnames';
import style from '../../style/all.scss.json'
import {change} from '../../unit'


export default (ddd:any,time:number) => {
    const conf = {
        styleTitle:'button',
        time:time,
    }
    const selectorText = change(conf)
    // return classNames(styleClass['time'],{
    //     [`${styleClass['wrapper-one']}`]: ddd,
    //     [`${styleClass['wrapper-tow']}`]: !ddd,
    //     [`${styleClass['font-one']}`]: ddd,
    //     [`${styleClass['font-tow']}`]: !ddd,
    // })
    return  classNames(style['button'],selectorText)
}