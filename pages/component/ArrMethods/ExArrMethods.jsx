import React, { useState } from 'react'

const ExArrMethods = () => {


  const [userSentence, setUserSentence] = useState('')

  const changeTextMyMethod = ()=>{
    const newSent = userSentence.split('').reverse().join('')
    setUserSentence(newSent)
  }

  return (
    <div>
      {userSentence}
      <br></br>
      <input onChange={(e)=>{setUserSentence(e.target.value)}}></input>
      <button onClick={()=>{changeTextMyMethod()}}>My Method</button>    
    </div>
  )
}

export default ExArrMethods