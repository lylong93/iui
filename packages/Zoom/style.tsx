import './style.scss'
import styleClass from './style.scss.json'
import classNames from 'classnames';
const style = (ddd:any) => {
    return classNames(styleClass['wrapper'])
}

export default style