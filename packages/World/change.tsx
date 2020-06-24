import defalut from '../../style/default.json';
import config from '../../config/index';
const change = () => {
    if(config.time  === 'am') {
        document.body.style.setProperty('--main-bg-color', defalut['--main-bg-color']); 
        document.body.style.setProperty('--main-shadow-start', '-1px -1px 3px #fff,3px 3px 3px grey');
    }else {
        document.body.style.setProperty('--main-bg-color', 'red'); 
    }
    
}
export default change