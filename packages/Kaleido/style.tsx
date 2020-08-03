// import './index.scss'
// import styleClass from './index.scss.json'
import classNames from 'classnames';
var  styleClass = {}
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
export const tran = classNames(styleClass['tran'])
export const running = classNames(styleClass['running'])
export const paused = classNames(styleClass['paused'])

export const top = classNames(styleClass['top'],styleClass['side'])
export const bottom = classNames(styleClass['bottom'],styleClass['side'])
export const left = classNames(styleClass['left'],styleClass['side'])
export const right = classNames(styleClass['right'],styleClass['side'])
export const back = classNames(styleClass['back'],styleClass['side'])
export const front = classNames(styleClass['front'],styleClass['side'])

export const sss = (flag:any) => 
    classNames( styleClass['cube'],{
        [`${styleClass['tran']}`]: flag,
    })