import React, {useState} from 'react'
import HomePage from "../HomePage";



function ButtonCarroussel({props,size}) {
    const[count,setCount] = useState(props)
    const increment = ()=> {
        count >= size ? setCount(0):setCount(c => c + 1)

    }

console.log(idSlider(count))


    return (
        <div>
            {idSlider()
            }
            <button  onClick={increment}> ></button>
        </div>
    );
}

function idSlider (count = 0){
    return HomePage(count)
}


export default ButtonCarroussel
