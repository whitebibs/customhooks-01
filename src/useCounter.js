import { useState } from "react"

export function useCounter ({initialValue = 0 }){
    const [count, setCounter] = useState(initialValue)

    function handleCounterIncrement(){
        setCounter((num) => num + 1)
    }
    function handleCounterDecre(){
        setCounter((num) =>num -1)
    }
    function handleCounterReset(){
       setCounter(initialValue)
    }

    return{
        count, 
       handleCounterIncrement,
       handleCounterDecre, handleCounterReset
    }
}