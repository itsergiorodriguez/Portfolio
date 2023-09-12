import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
function App() {

  return (
    <div>
      <NavBar/>
       <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route exact path="/inicio" element={<Home/>} />
         <Route exact path="/services" element={<Projects/>} />
         <Route exact path="/about" element={<About/>} />
       </Routes>
    </div>
  )
}

export default App
