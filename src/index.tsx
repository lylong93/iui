import {Button,Radio,Magic,World,Menu,Kaleido} from '../packages/index'
import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import defalut from '../style/default.json';

const {Header,Main,Footer,Aside,Layout,change} = World

function App () {
    useEffect(() => {
        // change()
      });
    const dd = () => {
        console.log('dd')
    }
    return (
        <World>             
            {/* <Menu index="1">
                <Menu.item title="1"></Menu.item>
                <Menu.item title="2"></Menu.item>
                <Menu.item title="3"></Menu.item>
            </Menu> */}
            {/* <div onClick={cccc}>eee</div> */}
             <Header>
                  <Button click={dd} size="min"></Button>
             </Header>
            <Layout>
                <Aside></Aside>
                <Main></Main>
                <Kaleido></Kaleido>
            </Layout>
            <Footer></Footer>
        </World>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );