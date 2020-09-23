import {useEffect, useState} from "react";

export function useFetch (url){
    const[state,setState] = useState({
        items:[],
        loading:true
    })
    useEffect(function () {
        (async () => {
            const response = await fetch(url)
            const responseData = await response.json()
            if (response.ok) {
                setState({
                    items: responseData,
                    loading: false
                })
            } else {
                alert(JSON.stringify(responseData))
                setState(s => ({...s, loading : false}) )
            }
        })()
    }, [url])

    return[
        state.loading,
        state.items
    ]
}