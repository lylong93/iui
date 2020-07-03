import React from 'react'
import './style.scss'
import styleClass from './style.scss.json'
import classNames from 'classnames';
import style from '../../Mzu/style';

const s = classNames(styleClass['wrapper'])
function IC () {
    return (
        <div className={s}>
            
        </div>
    )
}

export default IC