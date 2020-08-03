import classNames from 'classnames';

var styleClass = {

}
const style = (ddd:any) => {
    // return classNames(styleClass['time'],{
    //     [`${styleClass['wrapper-one']}`]: ddd,
    //     [`${styleClass['wrapper-tow']}`]: !ddd,
    // })
    
}

const menuItemtyle = (item:any) => {
    if(item== 1) {
        return classNames(styleClass['time'],{
            [`${styleClass['MenuItem']}`]: item,
            [`${styleClass['activ']}`]:item,
        })
    }else {
        return classNames(styleClass['time'],{
            [`${styleClass['MenuItem']}`]: item,
        })
    }

    
}
export const menuStyle = styleClass['Menu']
// export const menuItemtyle = styleClass['MenuItem']

export {menuItemtyle}
export default style