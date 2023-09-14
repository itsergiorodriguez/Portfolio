import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Servicios from "./components/Servicios/Servicios";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/inicio" element={<Home />} />
        <Route exact path="/services" element={<Projects />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/servicios" element={<Servicios />} />
        <Route exact path="/contacto" element={<Contacto/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
