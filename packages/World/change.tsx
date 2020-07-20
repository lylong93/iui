import config from '../../config/index';

import  '../../style/common/theme/dark.scss';
import dark from '../../style/common/theme/dark.scss.json';

import '../../style/common/theme/default.scss';
import def from '../../style/common/theme/default.scss.json';

import '../../style/common/theme/light.scss';
import light from '../../style/common/theme/light.scss.json';

const style = 'dark'

let obj = {
    'dark':dark,
    'def':def,
    'light':light
}

console.log('dddd',obj[style]['bg-color'])

const change = () => {
    document.body.style.setProperty('--main-bg-color', obj[style]['bg-color']); 
}
export default change