import React, {useReducer} from 'react'



export function Compteur() {

    function init(initialValue){
        return{count :initialValue}
    }

function reducer(state,action){
    switch (action.type){
        case 'increment':
            return {count :state.count +1}
        case 'decrement':
            return {count :state.count - 1}
        default :
            throw new Error("l'action"+action.type +"est apparu")
    }
}

const[count,dispatch] = useReducer(reducer,0,init)

    return <div>
        compteur : {JSON.stringify(count)}
        <button onClick={()=>dispatch({type :"increment"})}> incrementer </button>
        <button onClick={()=>dispatch({type :"decrement"})}> decrementer  </button>
    </div>
}