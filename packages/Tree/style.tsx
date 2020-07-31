// import './style.scss'
// import styleClass from './style.scss.json'
import classNames from 'classnames';
let styleClass ={

}
// const style = classNames(styleClass['three'])
const wrapper = classNames(styleClass['wrapper'])
// const pan = classNames(styleClass['pan'])
const one = classNames(styleClass['one'])
const dd = classNames(styleClass['dd'])

const tr = classNames(styleClass['tr'])

const ttt = classNames(styleClass['ttt'])

const ins = (falg:any) => {
    return classNames(styleClass['three'],styleClass['ins'],{
        [`${styleClass['wo']}`]: falg,
        [`${styleClass['wt']}`]: !falg
    }) 
}


const style = (falg:any) => {
    return classNames(styleClass['three'],{
        [`${styleClass['wo']}`]: falg,
        [`${styleClass['wt']}`]: !falg
    }) 
}
const pan = (falg:any) => {
    return classNames({
        [`${styleClass['pano']}`]: falg,
        [`${styleClass['pant']}`]: !falg
    }) 
}

const ss = (falg:any) => {
    return classNames({
        [`${styleClass['sso']}`]: falg,
        [`${styleClass['sst']}`]: !falg
    }) 
}

export{style,wrapper,pan,one,ss,dd,tr,ttt,ins}