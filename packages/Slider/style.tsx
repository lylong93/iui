import classNames from 'classnames';
import style from '../../style/all.scss.json'
import {change} from '../../unit'

export default () => {
    // const conf = {
    //     styleTitle:'button',
    //     time:time,
    //     state:mouseStyle
    // }
    // const selectorText = change(conf)

    return  {
        wrapper:classNames(style['slider']),
        btn:classNames(style['slider_btn'])
    }
}