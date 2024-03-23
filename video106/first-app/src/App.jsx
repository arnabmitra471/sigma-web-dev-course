import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card";

function App() {


  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title ="Card 1" description="card 1 description"/>
        <Card title ="Card 2" description="card 2 description"/>
        <Card title ="Card 3" description="card 3 description"/>
        <Card title ="Card 4" description="card 4 description"/>
      </div>
      <Footer />
    </>
  )
}

export default App
