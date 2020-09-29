import React from 'react';

import './App.css';
import NavbarBox from "./components/Navbar/NavbarBox";
import {Test} from "./components/Homepage/ShoePicture/Test";
import HomePage from "./components/Homepage/HomePage";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className="App">
            <NavbarBox/>
                <HomePage/>
            <Footer/>
            <Test/>
        </div>
    );
}

export default App;
