import React,{useRef,useEffect, Children} from "react";
import { Chart } from '@antv/g2';
function  Radion () {
        const El :any= useRef(null);
        const rect = useRef(null);
       
        let getcom =() =>  {
            let vnode :any= {}

            const path = (el:any) => {
                // debugger
                let _bnode :any = {}
                let cs = el.children
                if(cs.length === 0) {
                    return {}
                }else {                   
                    let node  =  Array.from(cs).map((item: any) => {
                        return {
                            left:item.getBoundingClientRect(),
                            node:path(item)
                        }
                    })
                    _bnode.children = node
                    return _bnode
                }
            }  
            vnode.children =  path(El.current)

            console.log(vnode)
        }

        // useEffect(()=>{
        //    const  container = document.getElementById('container');

        //     const data = [
        //         { type: '数据1', value: 56.4 },
        //         { type: '数据2', value: 43.6 }
        //       ];
        //       const chart = new Chart({
        //         container: 'container',
        //         autoFit: true,
        //         height: 500
        //       });
        //       chart.data(data);
              
        //       chart.coordinate('theta', {
        //         radius: 0.75,
        //         innerRadius: 0.4
        //       });
        //       const interval = chart
        //         .interval()
        //         .adjust('stack')
        //         .position('value')
        //         .color('type', ['#063d8a', '#1770d6', '#47abfc', '#38c060'])
        //         .style({ opacity: 0.4 })
        //         chart.render();
        // })

        // useEffect(()=>{
        //     const  conta = document.getElementById('conta');
 
        //      const data = [
        //          { type: '数据1', value: 56.4 },
        //          { type: '数据2', value: 43.6 }
        //        ];
        //        const chart = new Chart({
        //          container: 'conta',
        //          autoFit: true,
        //          height: 500
        //        });
        //        chart.data(data);
               
        //        const interval = chart
        //          .interval()
        //          .adjust('stack')
        //          .position('value')
        //          .color('type', ['#063d8a', '#1770d6', '#47abfc', '#38c060'])
        //          chart.render();
        // })
        
        var res = [-5,-4,-3,-2,-1,0,1,2,3,4,5];
        const listItems = res.map(item => {
            return <div  key={item.toString()} className="rrr">{item}</div>
        })


        return (
            <div className="www" onClick={getcom} ref={El}>
                <div className="head">
                    <div className="head-logo">logo</div>
                    <div className="head-main">{listItems}</div>
                </div>

                <div className="body">
                    <div className="body-main">
                        <div className="body-main-left">
                           {  
                                res.map(item=>　{
                                    return <div  key={item.toString()} className="left-item">{item}</div>
                                })
                           }
                        </div>
                        <div className="body-main-right">
                            <div className="right-item">
                                <div className="gitem"  ref={rect} id="container"></div>
                                <div className="gitem"  id="conta"></div>
                            </div>
                            <div className="right-item">
                                <div className="gitem"></div>
                                <div className="gitem"></div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
} 

export default Radion