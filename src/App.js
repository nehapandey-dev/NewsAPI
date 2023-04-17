import React from "react";
import "./App.css";
import GetNews from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Footer from "./Components/Footer"
import FetchApiData from "./Components/FetchApiData"


function App() {
  return (
    <div className="App">
      <Router>
        <GetNews />
        <Routes>
          <Route path="/" element ={<Home/>}></Route>
          <Route path="/sports" element={<FetchApiData cat="sports"/>}></Route>
          <Route path="/business" element={<FetchApiData cat="business"/>}></Route>
          <Route path="/health" element={<FetchApiData cat="health"/>}></Route>
          <Route path="/technology" element={<FetchApiData cat="technology"/>}></Route>
          <Route path="/education" element={<FetchApiData cat="entertainment"/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
