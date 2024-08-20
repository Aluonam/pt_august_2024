import React, { useEffect, useState } from 'react'
import ModalData3 from './ModalData3';

export interface dataProps {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}
const ApiCall3 = () => {

    const [data, setData] = useState<dataProps>()

    const call = async ()=>{
        try{
            const url = await fetch(`https://jsonplaceholder.typicode.com/todos/3`);
            const data = await url.json();
            setData(data)
        }catch(err){console.log('error detected', err)}
    }

    useEffect(() => {
      call()
    }, [])
    
    
    
  return (
    <ModalData3 data={data}></ModalData3>
  )
}

export default ApiCall3