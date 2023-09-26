import Home from "./components/Home";
import {BrowserRouter as Router} from 'react-router-dom';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Scan from "./components/Scan";
import Results from "./components/Results";
import Resultfol from "./components/Resultfol";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/home" element={<Scan/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/object" element={<Resultfol/>}/>
      </Routes>
    </Router>
  );
}

export default App;
