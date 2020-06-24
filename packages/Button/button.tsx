import React,{Component} from 'react'
import classNames from 'classnames';
import useHover from './useHove'
import './index.scss'
import styleClass from './index.scss.json'
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
        setInterval(() => {
            this.setState({
        //     flagone : !this.state.flagone,
        //     flagtow : !this.state.flagtow
            })
        }, 300);
    }

  
    render() {

      const style = classNames(styleClass['wrapper-one'],styleClass['time'])

        // var style = {
        //     boxShadow: `-${this.state.x}px -1px 3px red`
        // }
    
        return (
            <div className={style}>
                {this.props.name}    
            </div>)
    }
 
}
// const Button = () => {
//     function code  () {
//         alert('coe')
//     }
//     const element = (hovered: any) =>
//       <div>
//         Hover me! {hovered && 'Thanks!'}
//       </div>;
//     const [hoverable, hovered] = useHover(element);
  
//     return (
//       <div>
//         {hoverable}
//         <div>{hovered ? 'HOVERED' : ''}</div>
//       </div>
//     );
//   };

export default Button