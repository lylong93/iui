import {Button,Radio,Magic,World,Menu,Kaleido,Pcd,Zoom} from '../packages/index'
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
            <Header>
                
            </Header>
            <Layout>
                <Aside>
                    {/* <Pcd></Pcd> */}
                    {/* <Button click={dd} size="min">1</Button>
                    <Button click={dd} size="min">2</Button>
                    <Button click={dd} size="min">3</Button>
                    <Button click={dd} size="min">4</Button>
                    <Button click={dd} size="min">5</Button>
                    <Button click={dd} size="min">6</Button>
                    <Button click={dd} size="min">7</Button>
                    <Button click={dd} size="min">8</Button> */}
                </Aside>
                <Main>
                    {/* <Zoom></Zoom> */}
                </Main>
                {/* <Kaleido></Kaleido> */}
            </Layout>
            <Footer></Footer>
        </World>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );