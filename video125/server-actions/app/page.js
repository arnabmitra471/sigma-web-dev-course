"use client"
import { submitAction } from "@/actions/form";
import { useState } from "react";
export default function Home() {
  const [loading,setLoading] = useState(false)
  const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true);

    const formData = new FormData(e.target)
    console.log(formData)

    await submitAction(formData)
    setLoading(false)
  }
  return (
    <div className="w-full bg-green-100 min-h-screen">
      <form  onSubmit={handleSubmit} action={submitAction}>
        <div className="flex flex-col items-center gap-4 justify-center">
          <label htmlFor="name" className="p-4 font-bold">Enter your name</label>
          <input type="text" className="bg-green-100 text-green-500 hover:text-white hover:bg-green-500 w-1/4 my-2 border-2 border-orange-400 rounded-lg hover:transition-colors duration-200 ease-in-out delay-75 placeholder-teal-500 hover:placeholder-white py-4 px-2 focus:shadow-lg hover:shadow-xl" name="name" id="name" placeholder="Enter your name" />
        </div>
        <div className="flex flex-col items-center gap-4 justify-center">
          <label htmlFor="name" className="p-4 font-bold">Enter your address</label>
          <textarea className="bg-green-100 text-green-500 hover:text-white hover:bg-green-500 w-1/4 my-2 border-2 border-orange-400 rounded-lg hover:transition-colors duration-200 ease-in-out delay-75 placeholder-teal-500 hover:placeholder-white py-4 px-2 resize-none focus:shadow-lg hover:shadow-xl" name="add" id="add" rows="10" cols="30" placeholder="Enter your address"></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 p-4 my-4 rounded-lg text-white hover:text-purple-300 font-bold hover:bg-blue-600 transition-all duration-200 hover:scale-90">Submit</button>
        </div>
      </form>
      {loading && <p className="text-center text-blue-500 mt-4">Submitting</p>}
      </div>
  );
}
