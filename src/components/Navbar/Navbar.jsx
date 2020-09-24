import React from "react";
import Cartnotification from "./CartNotification/CartNotification";
import 'materialize-css';


function Navbar() {
    return (

        <nav>

            <div className="nav-wrapper ">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a className="text-darken-2" href="/">Men</a></li>
                    <li><a href="/">Women</a></li>
                    <li><a href="/">Kids</a></li>
                    <li><h1 className="brand-logo center">SNKRS.</h1></li>
                    <li><a href="/">Mybag</a></li>
                    <li><Cartnotification/></li>
                </ul>
            </div>
        </nav>
    )


}

export default Navbar