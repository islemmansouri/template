import React from "react";
import Navbar from "./layout/Navbar";
import Banner from "./layout/Banner";
import About from "./layout/About";
import Menu from "./layout/Menu";
import Recipes from "./layout/Recipes";
import Contact from "./layout/Contact";
import Tendency from "./layout/Tendency";
import Celebrations from "./layout/Celebrations";
import Classics from "./layout/Classics";
import Auth from "./layout/Auth";
import Profile from "./layout/Profile";
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';

function App() {
  return (
    


        <Router>

      <Navbar/>

        <Routes>  
        <Route  path="/" element={<Banner/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/menu" element={<Menu/>}/>
        <Route  path="/chef" element={<Recipes/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/Tendency" element={<Tendency/>}/>
        <Route  path="/celebrations" element={<Celebrations/>}/>
        <Route  path="/classics" element={<Classics/>}/>
        <Route  path="/connexion" element={<Auth/>}/>
        <Route  path="/Profile" element={<Profile/>}/>



        </Routes>
      

        </Router>
        


      
  );
}

export default App;
