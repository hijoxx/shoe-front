import {useEffect} from "react";
import {useIncrement} from "./useIncrement"

export function useAutoIncrement(initial = 0, step = 1) {
    const [count, increment] = useIncrement(initial,step)

    useEffect(() => {
        const timer = window.setInterval(() => {
           increment()
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    },[increment])


    return [count]
}