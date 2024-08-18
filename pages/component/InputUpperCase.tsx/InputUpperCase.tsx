import React, { useState } from 'react'

const InputUpperCase = () => {

  const [inputData, setInputData] = useState<string>('')

  const handleUpperCase = ()=>{
    console.log(inputData)
  }
  return (
    <>
    <input onChange={(e)=>{setInputData(e.target.value)}}></input>
    <button onClick={()=>{handleUpperCase()}}>Change</button>
    </>
  )
}

export default InputUpperCase