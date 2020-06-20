import {Button,Radio,Magic,World} from '../packages/index'
import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import defalut from '../style/default.json';
const {Header,Main,Footer,Aside,Layout} = World
function App () {
    const cha = () => {
        document.body.style.setProperty('--main-bg-color', defalut['--main-bg-color']); 
    }
    return (
        <World>
             <Header></Header>
            <Layout>
                <Aside></Aside>
                <Main></Main>
            </Layout>
            <Footer></Footer>
        </World>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );