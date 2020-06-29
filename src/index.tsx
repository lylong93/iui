import {Button,Radio,Magic,World,Menu} from '../packages/index'
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
             {/* <Button name="dd" click={dd} size="min"></Button> */}
            <Menu index="1">
                <Menu.item title="1"></Menu.item>
                <Menu.item title="2"></Menu.item>
                <Menu.item title="3"></Menu.item>
            </Menu>
            {/* <div onClick={cccc}>eee</div> */}
             {/* <Header>
                 <Button name="dd"></Button>
             </Header>
            <Layout>
                <Aside></Aside>
                <Main></Main>
            </Layout>
            <Footer></Footer> */}
        </World>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );