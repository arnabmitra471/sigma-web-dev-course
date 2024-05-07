
import React from 'react'

function Page() {
  console.log("This is arnab learning next js")
  return (
    <div>
      <h1 className="text-xl text-purple-400 underline">Problems solved by next js</h1>
      <ul className="flex gap-5">
        <li className="cursor-pointer">File based routing</li>
        <li className="cursor-pointer">Optimized rendering</li>
        <li className="cursor-pointer">next router in next navigation</li>
        <li className="cursor-pointer">Authentication</li>
      </ul>
    </div>
  )
}

export default Page