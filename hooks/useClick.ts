import React,{useState} from 'react'

const useClick = () => {
    const [flag,change] = useState(false)

    const click =()=> {
        change(true)
    }
    return[flag,click,change]
}

export default useClick