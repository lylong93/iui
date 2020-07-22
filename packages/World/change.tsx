
// import  styles from "../../style/common/theme/dark.scss";

const styles = require('../../style/common/theme/dark.scss')

const my = require('./my.css')
import * as React from 'react'

import '../../style/common/theme/default.scss';

import def from '../../style/common/theme/default.scss.json';

import '../../style/common/theme/light.scss';
import light from '../../style/common/theme/light.scss.json';

const style = 'dark'
// console.log('darktheme',styles);
// console.log('my',my);

let obj = {
    'dark':styles,
    'def':def,
    'light':light
}

const change = () => {
    // document.body.style.setProperty('--main-bg-color', obj[style]['dark__bg___CtBLj']); 
}
export default change