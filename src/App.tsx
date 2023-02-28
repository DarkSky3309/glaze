import Header from "./components/header/header";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import Services from "./components/services/services";
import About from "./components/about-us/About";
import Contact from "./components/contact/contact";
import Lookbook from "./components/look-book/Lookbook";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Routes>
                    <Route path="*" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/look-book" element={<Lookbook/>}/>
                    <Route path="/about-us" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </main>
        <Footer/>

        </div>
    )
}

export default App
