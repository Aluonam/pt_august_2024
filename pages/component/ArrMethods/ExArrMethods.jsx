import React, { useState } from 'react'

const ExArrMethods = () => {


  const [userSentence, setUserSentence] = useState('')

  const changeTextMyMethod = ()=>{
    const newSent = userSentence.split('').reverse().join('')
    setUserSentence(newSent)
  }

  const changeTextMethod1 = ()=>{

    let words = userSentence.split(' ');
    let reversedWords = [];
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let reversedWord = '';
      for (let j = word.length - 1; j >= 0; j--) {
        reversedWord += word[j];
      }
      reversedWords.push(reversedWord);
    }
    let reversedSentence = reversedWords.join(' ');
    setUserSentence(reversedSentence); 
  }

  return (
    <div>
      {userSentence}
      <br></br>
      <input onChange={(e)=>{setUserSentence(e.target.value)}}></input>
      <button onClick={()=>{changeTextMyMethod()}}>My Method</button>    
      <button onClick={()=>{changeTextMethod1()}}>Method 1</button>    
    </div>
  )
}

export default ExArrMethods