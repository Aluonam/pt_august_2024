import React, { useEffect, useState } from 'react'

const ApiCall = () => {

    const [dataApi, setdataApi] = useState()

    const call = async ()=>{
        const url = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        const data = await url.json()
        console.log(data)
    }

    useEffect(() => {
      call()
    }, [])
    
  return (
    <div>ApiCall</div>
  )
}

export default ApiCall