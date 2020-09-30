import React from "react";
import Cartnotification from "./CartNotification/CartNotification";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavbarBox() {
    const styles = {
        body: {
            backgroundColor: "#fefefe"
        },
        brand:{
        fontSize:"1.6em",
        fontWeight :" bold",
        color : "#d1d1d1"
        }
    }

    return (
        <div style={styles.body}>
<Navbar className="justify-content-between">
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

            <Nav activeKey="/home">
                <Nav.Item>
                    <Navbar.Brand style={styles.brand} href="#home">SNKRS.</Navbar.Brand>
                </Nav.Item>
            </Nav>

            <Nav activeKey="/home">
                <Nav.Item>
                    <Nav.Link className="text-dark" href="#">My Bag</Nav.Link>
                </Nav.Item>
                <Nav.Item><Cartnotification/></Nav.Item>
            </Nav>
</Navbar>
        </div>
    )
}

export default NavbarBox