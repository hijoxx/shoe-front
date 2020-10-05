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
        },
        item : {
            paddingLeft : "2em",
        }
    }

    return (
        <div style={styles.body}>
            <div className="row"><div className="col-10 offset-1">


<Navbar className="justify-content-between">
            <Nav>
                <Nav.Item style={styles.item}>
                    <Nav.Link className="text-secondary font-weight-bold" href="#">Men</Nav.Link>
                </Nav.Item>
                <Nav.Item style={styles.item}>
                    <Nav.Link className="text-secondary font-weight-bold" href="#">Women</Nav.Link>
                </Nav.Item >
                <Nav.Item style={styles.item}>
                    <Nav.Link className="text-secondary font-weight-bold" href="#">Kids</Nav.Link>
                </Nav.Item>
            </Nav>

            <Nav activeKey="/home">
                <Nav.Item>
                    <Navbar.Brand  className="font-weight-bold" style={styles.brand} href="#home">NIKE STORE.</Navbar.Brand>
                </Nav.Item>
            </Nav>

            <Nav activeKey="/home">
                <Nav.Item >
                    <Nav.Link className="text-secondary font-weight-bold" href="#">My Bag</Nav.Link>
                </Nav.Item>
                <Nav.Item style={styles.item}><Cartnotification/></Nav.Item>
            </Nav>
</Navbar></div></div>
        </div>
    )
}

export default NavbarBox