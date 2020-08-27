import {Button,Radio,Magic,World,Menu,Kaleido,Pcd,Zoom,Tree,Test,Tab,Input,Checkbox,Switch,Slider} from '../packages/index'
import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

import  '../style/all.scss'
// import './index.scss';
// import defalut from '../style/default.json';

const {Header,Main,Footer,Aside,Layout} = World

function App () {
    useEffect(() => {
        // change()
    });
    return (

        <World>
            <Button></Button>
            {/* <Switch active="on" inactive="off" ></Switch> */}
            {/* <Input></Input> */}
            {/* <Button click={dd}> 1</Button> */}
            {/* <Tab>
                <Tab.pan lable="1">1</Tab.pan>
                <Tab.pan lable="2">2</Tab.pan>
                <Tab.pan lable="3">3</Tab.pan>
            </Tab> */}
            {/* <tab-pan></tab-pan> */}
            {/* <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button> */}
        </World>
        // <World>   
        //     {/* <Menu index="1">
        //         <Menu.item title="1"></Menu.item>
        //         <Menu.item title="2"></Menu.item>
        //         <Menu.item title="3"></Menu.item>
        //     </Menu> */}
        //     <Header>
        //         <Test>but</Test>  
        //     </Header>
        //     <Layout>
        //         <Aside>
        //             <Tree></Tree>
        //             {/* <Pcd></Pcd> */}
        //             {/* <Button click={dd} size="min">1</Button>
        //             <Button click={dd} size="min">2</Button>
        //             <Button click={dd} size="min">3</Button>
        //             <Button click={dd} size="min">4</Button>
        //             <Button click={dd} size="min">5</Button>
        //             <Button click={dd} size="min">6</Button>
        //             <Button click={dd} size="min">7</Button>
        //             <Button click={dd} size="min">8</Button> */}
        //         </Aside>
        //         <Main>
        //             {/* <Zoom></Zoom> */}
        //         </Main>
        //         {/* <Kaleido></Kaleido> */}
        //     </Layout>
        //     <Footer></Footer>
        // </World>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );