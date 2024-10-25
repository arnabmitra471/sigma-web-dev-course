import fs from "fs/promises"
export default function Home() {

  const submitAction = async(e)=>{
    "use server"
    console.log(e.get("name"))
    console.log(e.get("add"))
    let content = await fs.appendFile("arnab.txt","Hey folks !! I am loving to work with next js a lot\n")
    console.log(content)
    
  }
  return (
    <div>
      <form action={submitAction} className="bg-green-100">
        <div className="flex flex-col items-center gap-4 justify-center">
          <label htmlFor="name" className="p-4 ">Enter your name</label>
          <input type="text" className="bg-white text-green-500 hover:text-white hover:bg-green-500 w-1/4 my-2 border-2 border-orange-400 rounded-lg hover:transition-colors duration-200 ease-in-out delay-75 placeholder-teal-500 hover:placeholder-white py-4 px-2" name="name" id="name" placeholder="Enter your name" />
        </div>
        <div className="flex flex-col items-center gap-4 justify-center">
          <label htmlFor="name" className="p-4 ">Enter your address</label>
          <textarea className="bg-white text-green-500 hover:text-white hover:bg-green-500 w-1/4 my-2 border-2 border-orange-400 rounded-lg hover:transition-colors duration-200 ease-in-out delay-75 placeholder-teal-500 hover:placeholder-white py-4 px-2 resize-none" name="add" id="add" rows="10" cols="30" placeholder="Enter your address"></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 p-4 my-4 rounded-lg text-white hover:text-purple-300 font-bold hover:bg-blue-600 transition-all duration-200 hover:scale-90">Submit</button>
        </div>
      </form>
    </div>
  );
}
