import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {register,
    handleSubmit,
    watch,
    formState:{errors},
  } = useForm();

  const onSubmit = (data)=> console.log(data)
  return (
    <>
      <div className="container p-5 flex justify-center items-center gap-5 bg-purple-200 w-1/2 m-auto border-2 border-orange-400 rounded-md min-h-[60vh]">
        <form action="" onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
          <input {...register("username",{required: {value: true, message: "This field is required"} , minLength: {value: 3, message:"username must be at least 3 characters"}, maxLength: {value: 15, message: "username must be at most 15 chararacters"}})} type="text" placeholder="Enter your Username" className="p-5  bg-green-500 text-white placeholder-white hover:bg-white hover:text-green-500 transition-colors duration-100 ease-in-out hover:placeholder-green-500 hover:border-2 hover:border-solid hover:border-orange-400"/><br/>
          {errors.username && <div className="text-red-500">{errors.username.message}</div>}
          <input {...register("password", {required: {value: true, message: "This field is required"} , minLength: 8, maxLength: 25})} type="password" placeholder="Enter your password" className="p-5  bg-green-500 text-white placeholder-white hover:bg-white hover:text-green-500 transition-colors duration-100 ease-in-out hover:placeholder-green-500 hover:border-2 hover:border-solid hover:border-orange-400"/><br/>
          {errors.password && <div className="text-red-500">{errors.password.message}</div> }
          <input type="submit" value="submit" className="bg-blue-500 hover:bg-blue-600 rounded-md p-5 m-4 hover:text-white cursor-pointer hover:scale-105"/>
        </form>
      </div>
    </>
  )
}

export default App
