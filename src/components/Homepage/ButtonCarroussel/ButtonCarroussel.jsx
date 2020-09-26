import React, {useState} from 'react'

function ButtonCarroussel({props,size}) {
    const[count,setCount] = useState(props)
    const increment = ()=> {
        count >= size ? setCount(0):setCount(c => c + 1)
    }


    return (
        <div>


            <button  onClick={increment}> ></button>
        </div>
    );
}

export default {ButtonCarroussel,idSlider}
