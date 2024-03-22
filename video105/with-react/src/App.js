import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css"
function App() {

  // A variable that can be changed and used in the DOM is called state
    const [count,setCount] = useState(0);

    const updateCount = ()=>{
      setCount(count + 1);
    }
  return (
    <div className="App">

      <Navbar logoTxt="BioWithArnab"/>
      {count}
      <div className="container">
      <button className="btn btn-primary" onClick={updateCount}>Click me</button>
      </div>
    </div>
  );
}

export default App;
