import React from 'react';

import './App.css';
import Nav from "./components/Navbar/Navbar";
import {Test} from "./components/Homepage/ShoePicture/Test";
import HomePage from "./components/Homepage/HomePage";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className="App">
            <Nav/>
                <HomePage/>
            <Footer/>
            <Test/>
        </div>
    );
}

export default App;
