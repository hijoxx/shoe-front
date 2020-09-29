import React from "react";
import Cartnotification from "./CartNotification/CartNotification";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavbarBox() {
    const styles = {
        body: {
            backgroundColor: "#fefefe"
        }
    }

    return (
        <div style={styles.body}>

            <Nav>
                <Nav.Item>
                    <Nav.Link className="text-dark" href="#">Men</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-dark" href="#">Women</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-dark" href="#">Kids</Nav.Link>
                </Nav.Item>
            </Nav>


            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Navbar.Brand className="text-secondary" href="#home">SNKRS.</Navbar.Brand>
                </Nav.Item>
            </Nav>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link className="text-dark" href="#">My Bag</Nav.Link>

                </Nav.Item>
                <Nav.Item><Cartnotification/></Nav.Item>
            </Nav>

        </div>
    )
}

export default NavbarBox