import classNames from 'classnames';
import style from '../../style/all.scss.json'

export default () => {
    return {
        table:classNames(style['table']),
        eve:classNames(style['eve']),
        pan:classNames(style['pan']),
    }
}