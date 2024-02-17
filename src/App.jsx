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
import Consultant from "./components/pages/consultant search/Consultant";
import Vaccine from "./components/pages/vaccine/Vaccine";
import Medical from "./components/pages/Medical Data/Medical";
import Mealsuggestion from "./components/pages/Meal-suggestion/Mealsuggestion";
import UserSelection from "./components/pages/select user/UserSelection";
import BussinessProfile from "./components/pages/BussinessProfile/BussinessProfile";

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
        <Route path="/Mealsuggestion" element={<Mealsuggestion/>}/> 
        <Route path="/consultant" element={<Consultant/>}/>
        <Route path="/vaccine" element={<Vaccine/>}/>
        <Route path="/medical" element={<Medical/>}/>
        <Route path="/selectUser" element={<UserSelection/>}/>
        <Route path="/bussinessProfile" element={<BussinessProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
