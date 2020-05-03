import React,{Component} from 'react'
import classNames from 'classnames';

import './index.css'

// const classes  = classNames(
//     {'wrapper-one': flagone ,'wrapper-tow':flagtow }
// )

interface Props {
    name:string
  }

  interface S {
    flagone:boolean,
    flagtow:boolean,
    x:number
  }
class Button extends React.Component<Props, S> {
    [x: string]: any; 

    constructor(props:any) {
        super(props);
        this.state = {flagone:true,flagtow:false,x:10};
    }

    change =()=> {
        // this.setState({
        //     flagone : !this.state.flagone,
        //     flagtow : !this.state.flagtow
        // })
        let num = 1
        setInterval(() => {
            num++
            this.setState({
                x: num
        //     flagone : !this.state.flagone,
        //     flagtow : !this.state.flagtow
            })
        }, 300);
    }

  
    render() {
        var classes = classNames(
            {'wrapper-one': this.state.flagone ,'wrapper-tow':this.state.flagtow }
        )
        var style = {
            boxShadow: `-${this.state.x}px -1px 3px red`
        }
    
        return (
            <div className={classes} onClick={this.change.bind(this)}>
                {this.props.name}    
            </div>)
    }
 
}


export default Button