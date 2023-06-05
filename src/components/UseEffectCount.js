import React, { useState, useEffect } from 'react'

function UseEffectCount() {
    const [count, useCount] = useState(0)
    useEffect(() => {
        document.title = count
    }, [count])

    const [count2, useCount2] = useState(0)
    useEffect(() => {
        document.title = count2
    }, [count2])
    const [time, setTime] = useState(0)
    useEffect(() => {
        console.log('counting time')
        const interval = setInterval(() => {
           setTime(time => time+1)
        }, 1000);
        return () => {
            console.log("Clean")
            clearInterval(interval)
        }
    }, [])
  return (
    <div>
        <button onClick={
            () => useCount(count => count+1)
        }>Increment Count({count})</button>
        <button onClick={
            () => useCount2(count2 => count2+1)
        }>Increment Count2({count2})</button>
        <h2>Time is {time}</h2>
    </div>
  )
}

export default UseEffectCount