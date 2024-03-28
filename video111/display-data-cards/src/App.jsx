import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { useEffect, useState } from 'react'

function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    const fetchData = ()=>{
      fetch('https://jsonplaceholder.typicode.com/todos').then(response=>{
       return response.json();
      }).then(json=>{
          setData(json)
      })
    }
    fetchData()
  },[])
  return (
    <>
      <Navbar/>
      <div className="flex flex-row">
      <Card data={data}/>
      <Card data={data}/>
      <Card data={data}/>
      <Card data={data}/>
      </div>
    </>
  )
}

export default App
