import React, { useCallback, useEffect, useRef } from "react";
import { useMemo } from "react";
import { useState } from "react";

const Passwordproj = () => {
  let [passwordinput, setPasswordInput] = useState("");
  let [length, setLength] = useState(8);
  let [numberallowed, setNumberAllowed] = useState(false);
  let [charallowed, setCharAllowed] = useState(false);

  let passwordref = useRef()

  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*_()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      // console.log(char)

      pass += str.charAt(char);
      // console.log(pass)
    }
    setPasswordInput(pass);
  }, [length, numberallowed, charallowed,]);

  let copyPasswordToClicpBoard = ()=>{

    // copy to clip board scripting
    window.navigator.clipboard.writeText(passwordinput)
    passwordref.current?.select()
    // passwordref.current?.focus()
    // passwordref.current?.setSelectionRange(0,5)

  }


  useEffect(()=>{
    passwordGenerator()
    // console.log("text")
  },[length, numberallowed, charallowed])


  return (
    <>
      <h1 className="text-4xl mt-5 text-center w-fit m-auto font-semibold text-white my-6">
        Password
      </h1>
      <hr />
      <hr />

      <div className="max-w-3xl mx-auto shadow-md rounded-lg px-12  py-5 my-8 text-orange-500 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden">
          <input
           type="text"
            value={passwordinput}
            className="outline-none w-full py-3 px-3 text-2xl"
            placeholder="password"
            readOnly
            ref={passwordref}
          
          />

          <button 
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClicpBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-7 mt-4">
          <div className="flex items-center gap-x-1 text-2xl">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="w-32">Length:({length})</label>
          </div>

          <div className="flex items-center gap-x-1 text-2xl">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
  
            />
            <label htmlFor="numberInput">Numbers</label>

          </div>

          <div className="flex items-center gap-x-1 text-2xl">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="checkbox"
              defaultChecked={charallowed}
              id="CharInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}

            />
            <label htmlFor="CharInput">Characters</label>

          </div>

        </div>
      </div>
    </> 
  );
};

export default Passwordproj;
