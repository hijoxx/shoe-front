import React, {useEffect,} from 'react'
import useIncrement from "../../../Hooks/useIncrement";

function ButtonCarroussel({key}) {

    const [product, incrementedProduct] = useIncrement(0, 1)

    useEffect(() => {
        {key = product}
        console.log(key)
    })


return (

    <div>
        <button onClick={incrementedProduct} id={key}>
        </button>
    </div>
)
}

export default ButtonCarroussel
