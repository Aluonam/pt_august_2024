import { accordionSummaryClasses } from '@mui/material'
import React, { useState } from 'react'

const VocalCounter = () => {

    const [dataInput, setDataInput] = useState<string>('')
    const [counter, setCounter] = useState<number>(0)

    const countLet = (dataInput:string)=>{
        const vocals = ['a','e','i','o','u']
        setCounter(0)
        const numberVocals = dataInput.toLocaleLowerCase().split('').reduce((acum:number,actLet:string)=>{
            let actualNumberVocals = acum
            if(vocals.some((vocal)=>vocal === actLet)) actualNumberVocals++
            return actualNumberVocals
        
        },0)
        setCounter(numberVocals)
    }


  return (
    <>
    <input onChange={(e)=>{setDataInput(e.target.value)}}></input>
    <button onClick={()=>{countLet(dataInput)}}>Click</button>
    {counter}
    </>
  )
}

export default VocalCounter