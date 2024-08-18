import React, { useEffect, useState } from 'react'
import ModalData from './ModalData'

export interface dataPropsType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
const ApiCall = () => {

    const [dataApi, setdataApi] = useState<dataPropsType | undefined>()

    useEffect(() => {
        call()
        }, [])
    
    const call = async ()=>{
        try{
            const url = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
            const data = await url.json()
            console.log(data)
            setdataApi(data)
        } catch(err){console.log('error is detected', err)}
    }
    
  return (
    <ModalData dataApi={dataApi}></ModalData>
  )
}

export default ApiCall