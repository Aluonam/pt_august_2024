import React, { useState } from 'react'

const InputUpperCase = () => {

  const [inputData, setInputData] = useState<string>()
  const [newSentence, setNewSentence] = useState<string>()

  const handleUpperCase = ()=>{
    const letters = inputData?.split('')
    const upperCase = letters?.map((oneletter)=>{
      return oneletter.toUpperCase()
    })
    const allUpper =  upperCase?.join('')
    setNewSentence(allUpper)
    setInputData(' ')
  }
  return (
    <>
    <input onChange={(e)=>{setInputData(e.target.value)}}></input>
    <button onClick={()=>{handleUpperCase()}}>Change</button>
    <br></br>
    {newSentence}
    </>
  )
}

export default InputUpperCase