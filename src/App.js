import Navbar from "./Components/NavBar/Narbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import "./App.css"
import Services from "./Components/Services/Services";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <About/>
    <Services/>
    
    </div>
  )
  
}

export default App;
