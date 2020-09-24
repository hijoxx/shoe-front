import React from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Test} from "./components/Homepage/ShoePicture/Test";
import HomePage from "./components/Homepage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">

            <Navbar/>

                <HomePage/>

            <Footer/>
            <Test/>
        </div>
    );
}

export default App;
