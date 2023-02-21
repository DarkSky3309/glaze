import Header from "./components/header/header";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import Services from "./components/services/services";

function App() {

    return (
        <div className="App">
            <Header/>
            <main>
                <Routes>
                    <Route path="*" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                </Routes>
            </main>
        <Footer/>
        </div>
    )
}

export default App
