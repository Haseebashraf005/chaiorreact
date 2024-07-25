import React, { useState } from 'react'
import useCurrencyInfo from './components/hook/useCurrencyInfo'
import Input from './components/Input'

const CurrencyProject = () => {

    let [amount ,setAmount] = useState(0) 
    let [from,setFrom] = useState("usd")
    let [to,setTo] = useState("pkr")
    let [convertedAmount,setConvertedAmount] = useState(0)
    

    let currencyInfo =useCurrencyInfo(from) 
    let currencyOptions = Object.keys(currencyInfo)

    console.log(currencyInfo)
    // console.log(onlykey)
 
  
    
    return (
        <>

        <h1 className='text-4xl text-center bg-orange-600 rounded font-bold p-4 m-4'>Custom Hook</h1>

        <Input/>

        </>


    )
}

export default CurrencyProject