import './index.scss'
import styleClass from './index.scss.json'
import classNames from 'classnames';

// const style = (ddd:any) => {
//     return classNames(styleClass['Kaleido'])
    
// }
// export 
// {
//      classNames(styleClass['Kaleido']) as ksl,
//      classNames(styleClass['cub']) as cub
// }

export const scene = classNames(styleClass['scene'])
export const cube = classNames(styleClass['cube'])

export const side = classNames(styleClass['side'])

export const top = classNames(styleClass['top'],styleClass['side'])
export const bottom = classNames(styleClass['bottom'],styleClass['side'])
export const left = classNames(styleClass['left'],styleClass['side'])
export const right = classNames(styleClass['right'],styleClass['side'])
export const back = classNames(styleClass['back'],styleClass['side'])
export const front = classNames(styleClass['front'],styleClass['side'])