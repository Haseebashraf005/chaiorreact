import React from 'react'
import useCurrencyInfo from './components/hook/useCurrencyInfo'

const CurrencyProject = () => {

    let price =useCurrencyInfo("pkr")
    console.log(price)

  
    
    return (
        <>

        <h1 className='text-4xl text-center bg-orange-600 font-bold p-4 m-4'>testing</h1>

        </>


    )
}

export default CurrencyProject