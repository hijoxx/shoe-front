import React from "react";
import Cartnotification from "./CartNotification/CartNotification";

function Navbar() {

    return (
        <nav>
            <div className="nav-wrapper ">
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="/">Men</a></li>
                    <li><a href="/">Women</a></li>
                    <li><a href="/">Kids</a></li>
                    <li><h1 class="brand-logo center">SNKRS.</h1></li>
                    <li><a href="/">Mybag</a></li>
                    <li><Cartnotification/></li>
                </ul>
            </div>
        </nav>
    )


}

export default Navbar