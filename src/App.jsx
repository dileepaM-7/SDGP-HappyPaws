import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/NavigationBar/Navbar";
import { About, Contact, Home, Services } from "./components/pages";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import Profile from "./components/pages/profile/Profile";
import ExcerisePlanner from "./components/pages/excerise planner/ExcerisePlanner";
import InputData from "./components/pages/excerise planner/inputData/InputData";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/exceisePlanner" element={<ExcerisePlanner/>}/>
        <Route path="/excerseInput" element={<InputData/>}/>
      </Routes>
    </div>
  );
}

export default App;
