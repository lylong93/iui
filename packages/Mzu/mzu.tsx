import React from 'react'
import style from './style'

const  MyContext = React.createContext(
    {
        name:"my is mzu"
    }
);


const Mzu = (props:any) => {
    const {children}  = props
    // const render  =  () => children

    return (
        <MyContext.Consumer>
            {value => (
                <div>
                    {value.name}
                    {children}
                </div>
            )}
        </MyContext.Consumer>
    )
}


export default Mzu