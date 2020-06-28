import './index.scss'
import styleClass from './index.scss.json'
import classNames from 'classnames';

const style = (ddd:any) => {
    return classNames(styleClass['time'],{
        [`${styleClass['wrapper-one']}`]: ddd,
        [`${styleClass['wrapper-tow']}`]: !ddd,
    })
    
}

export default style