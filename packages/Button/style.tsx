// import './index.scss'
// import styleClass from './index.scss.json'
import classNames from 'classnames';
import style from '../../style/all.scss.json'

export default (ddd:any) => {
    // return classNames(styleClass['time'],{
    //     [`${styleClass['wrapper-one']}`]: ddd,
    //     [`${styleClass['wrapper-tow']}`]: !ddd,
    //     [`${styleClass['font-one']}`]: ddd,
    //     [`${styleClass['font-tow']}`]: !ddd,
    // })
    return  classNames(style['button'])
}