import React, { useEffect, useState } from 'react'

const useCurrencyInfo = (currency) => {

    let[data,setData] = useState({})
     

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        // console.log(data.date)
    },[currency])   
    // console.log(data)

    return data
}

export default useCurrencyInfo