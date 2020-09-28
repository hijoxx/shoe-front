import React from "react";
import Cartnotification from "./CartNotification/CartNotification";
import 'materialize-css';
import Navbar from 'react-bootstrap/Navbar'

function Nav() {
    return (
        <>
            {/*<Nav*/}
            {/*    activeKey="/home"*/}
            {/*    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}*/}
            {/*>*/}
            {/*    <Nav.Item>*/}
            {/*        <Nav.Link href="/home">Men</Nav.Link>*/}
            {/*    </Nav.Item>*/}
            {/*    <Nav.Item>*/}
            {/*        <Nav.Link eventKey="link-1">Women</Nav.Link>*/}
            {/*    </Nav.Item>*/}
            {/*    <Nav.Item>*/}
            {/*        <Nav.Link eventKey="link-2">Kids</Nav.Link>*/}
            {/*    </Nav.Item>*/}
            {/*</Nav>*/}
            {/*<Nav.Item className="justify-content-center">*/}
            {/*    <Nav.Link eventKey="link-3"><h1>SNKRS</h1></Nav.Link>*/}
            {/*</Nav.Item>*/}

            {/*<Nav className="justify-content-end" activeKey="/home">*/}
            {/*    <Nav.Item>*/}
            {/*        <Nav.Link eventKey="link-3"><h1>Mybag</h1></Nav.Link>*/}
            {/*    </Nav.Item>*/}
            {/*    <Cartnotification/>*/}
            {/*</Nav>*/}

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Nav