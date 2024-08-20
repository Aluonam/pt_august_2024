import React, { useEffect, useState } from 'react'
import ModalData2 from './ModalData2'

export interface dataPropsType {
    id: number;
    title: string;
    completed: boolean;
}

const ApiCall2 = () => {

    const [data, setData] = useState<dataPropsType>()

    const call = async () => {
        try{
            const url = await fetch(`https://jsonplaceholder.typicode.com/todos/2`)
            const data = await url.json()
            setData(data)
        }catch(err){console.log('errr detected', err)}
    }

    useEffect(() => {
        call()
    }, [])
    
  return (
    <div>
        <ModalData2 data={data}></ModalData2>
    </div>
  )
}

export default ApiCall2