import React, { useState, Children } from 'react'
import style from './style'


function Tab (prop:any) {

    console.log('prop',prop)
    const {table,eve,pan} = style()
    const [curPan,charPan] = useState(1)
    const sel =(event:any) => {
        const cur = event.target
        charPan(cur.dataset.tab) 
        console.log('cur',curPan)
    }
    return (
        <div onClick={sel} >
            <div className={table}>
                <div data-tab="1" className={eve}>tab1</div>
                <div data-tab="2" className={eve}>tab2</div> 
                <div data-tab="3" className={eve}>tab3</div>
            </div>
            
            <div className={pan}>
                {
                    prop.children.find((item: any)=> {
                        return  item.props.lable == curPan
                    })
                }
            </div>
        </div>
        )
}


function TabPan (prop:any) {
    return (
        <div>
            tabpan{prop.children}
        </div>
    )
}
Tab.pan = TabPan
export default Tab