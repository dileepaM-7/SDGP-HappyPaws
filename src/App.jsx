import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/NavigationBar/Navbar";
import { About, Contact, Home, Services } from "./components/pages";
import Register from "./components/pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
