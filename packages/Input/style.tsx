import classNames from 'classnames';
import style from '../../style/all.scss.json'

export default (state:boolean) => {
    return {
        inputWrapper:classNames(style['inputWrapper'],{
            [`${style['input_focus']}`]: !state,
            [`${style['input_focus']}`]: state,
        }),
        input:classNames(style['input']),
        w:classNames(style['w'],{
            [`${style['w_focus']}`]: state,
            [`${style['w_blur']}`]: !state,
        }),
    }
}