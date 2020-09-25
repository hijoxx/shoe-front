import React from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Test} from "./components/Homepage/ShoePicture/Test";
import HomePage from "./components/Homepage/HomePage";
import Footer from "./components/Footer/Footer";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


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
