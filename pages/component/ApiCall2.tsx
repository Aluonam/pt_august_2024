import React, { useEffect, useState } from 'react'

const ApiCall2 = () => {

    const [data, setData] = useState()

    const call = async () => {
        try{
            const url = await fetch(`https://jsonplaceholder.typicode.com/todos/2`)
            const data = await url.json()
            console.log(data)
            setData(data)
        }catch(err){console.log('errr detected', err)}
    }

    useEffect(() => {
        call()
    }, [])
    
  return (
    <div>ApiCall2</div>
  )
}

export default ApiCall2