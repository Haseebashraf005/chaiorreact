import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const Passwordproj = () => {

let [passwordinput , setPasswordInput] = useState("")
let [length , setLength] = useState(8)
let [numberallowed , setNumberAllowed] = useState(false)
let [charallowed , setCharAllowed] = useState(false)

function test (){
  console.log("this is func")
}

let texst = useMemo(()=>{
console.log("usememo clg")
})

  return (

    <>    <h1 className="text-4xl font-bold mt-5 text-center w-fit m-auto font-semibold text-white">
    Password Generator
  </h1>

  <button onClick={()=>setPasswordInput("asd")}>add</button>
  <br />
  <button onClick={()=>setLength(4)}>sub</button>
  <br />
  <br />
  <br />


  {passwordinput || "test"}


  </>


  )
}

export default Passwordproj