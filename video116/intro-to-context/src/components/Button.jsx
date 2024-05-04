import React from 'react'
import Component1 from './Component1'
import { useContext } from 'react'
import { CounterContext } from '../context/context'
const Button = () => {
    const value = useContext(CounterContext)
    const {count, setCount} = value

  return (
    <div>
        <button onClick={()=>{setCount(count + 1)}}><span><Component1/></span>Click me !!</button>
    </div>
  )
}

export default Button