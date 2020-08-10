import classNames from 'classnames';
import style from '../../style/all.scss.json'
import {change} from '../../unit'

export default (flag?:any,disabled?:boolean) => {
    return {
        wrapper:classNames(style['wrapper']),
        btn:classNames(style['btn'],{
            [`${style[`offbtn`]}`]: flag,
            [`${style[`onbtn`]}`]: !flag,
            [`${style[`btndisabled`]}`]:disabled,
        }),
        tip:classNames(style['tip'],{
            [`${style[`offtip`]}`]: flag,
            [`${style[`ontip`]}`]: !flag,
        })
    }
}