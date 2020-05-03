import {Button,Radio} from '../packages/index'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// import test from './test'

function App () {
    return (
        <div className="app">
            <Button name="button"/>
        </div>)
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );