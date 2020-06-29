import './index.scss'
import styleClass from './index.scss.json'
import classNames from 'classnames';

const style = (ddd:any) => {
    return classNames(styleClass['time'],{
        [`${styleClass['wrapper-one']}`]: ddd,
        [`${styleClass['wrapper-tow']}`]: !ddd,
        [`${styleClass['font-one']}`]: ddd,
        [`${styleClass['font-tow']}`]: !ddd,
    })
    
}

export default style