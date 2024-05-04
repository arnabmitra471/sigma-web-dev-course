import React,{useContext} from 'react'
import { CounterContext } from '../context/context'

const Component1 = () => {
    const value = useContext(CounterContext)
    const {count} = value
    
  return (
    <div>
      I am a component
      The counter value is {count}
    </div>
  )
}

export default Component1
