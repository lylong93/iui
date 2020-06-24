import {Button,Radio,Magic,World} from '../packages/index'
import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import defalut from '../style/default.json';
const {Header,Main,Footer,Aside,Layout,change} = World
function App () {
    useEffect(() => {
        change()
      });

    return (
        <World>
             <Header>
                 <Button name="dd"></Button>
             </Header>
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