import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";


function Navi() {




    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Nav className="me-auto" defaultActiveKey="/">
                        <Nav.Link as={Link} to="/" eventKey="1.0"
                        >Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" eventKey="2.0"
                        >About</Nav.Link>
                        <Nav.Link as={Link} to="/skills" eventKey="3.0"
                        >Skills</Nav.Link>
                        <Nav.Link as={Link} to="/experience" eventKey="4.0"
                        >Experience</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div>
            <Outlet />
            </div>
        </div>
    );
}

export default Navi;