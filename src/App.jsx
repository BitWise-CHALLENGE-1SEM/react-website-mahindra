import Nav from "./components/Nav"
import Slideshow from "./components/Slideshow"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

function App() {
  

  return (<>
    <Nav buttons={["Home","Login"]}/>
    <Slideshow/>
    <Outlet/>
    <Footer/>
  </>)
}

export default App
