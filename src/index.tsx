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

    const cccc:any =() => {
        console.log('dddd')
    }
    return (
        <World>
            <div onClick={cccc}>eee</div>
             <Header>
                 <Button name="dd"></Button>
             </Header>
            <Layout>
                <Aside></Aside>
                <Main></Main>
            </Layout>
            <Footer></Footer>
             {/* <Magic/> */}
        </World>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );