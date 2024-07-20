import React, { useState } from 'react'

const State = () => {

    let [count, setCount] = useState(15)

    let add = () => {
        count = count + 10;
        console.log(count)
    }


    let show = () => {

        setCount(count)
    }
    return (
        <>

            <h2>the value is {count}</h2>
            <button onClick={add}>add</button>
            <button onClick={show}>update value is {count}</button>



        </>)
}

export default State