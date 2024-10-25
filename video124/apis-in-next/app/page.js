"use client"
export default function Home() {
  const handleClick = async()=>{
    let info = {
      name : "Vrinda",
      age : 23,
      favLang : ["Javascript","Python"]
    }
      let data = await fetch("/api/add",{
        method : "POST",
        headers : {
          "Content-Type": "application/json"
        },
        body : JSON.stringify(info)
      })
      let res = await data.json()
      console.log(res)
    }
  return (
    <>
      <div className="my-4 p-4 border-2 border-orange-500 w-1/2 rounded-lg m-auto flex  flex-col justify-center items-center bg-yellow-200">
        <h1 className="text-xl font-bold text-teal-600 underline">Next JS api routes demo</h1>
          <p className="text-lg my-4">Here we will see how apis are created with next js</p>
        <button onClick={handleClick} className="bg-purple-500 my-5 p-4 hover:bg-purple-700 cursor-pointer rounded-lg font-bold text-white hover:scale-105 hover:transition-colors transition-transform text-center">Click me</button>
      </div>
    </>
  );
}
