import {useState} from "react";

function useIncrement(initial =0 ,step=1){
    const[count,setCount] = useState(initial)

    const increment = ()=> {
        setCount(c =>c + step)
    }
    return [count,increment]
}

export default useIncrement