import React from "react";
import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';

import {Button, Form} from "react-bootstrap";
import '../static/css/navigaton-bar.css'
import {Link} from "react-router-dom";

const NavigationBar: React.FC = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">ANCESTRALIZE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" variant="pills">
                        <NavDropdown title="Disease" id="basic-nav-dropdown" renderMenuOnMount={true}>
                            <NavDropdown.Item>Find disease</NavDropdown.Item>
                            <NavDropdown.Item>Add disease</NavDropdown.Item>
                            <NavDropdown.Item>Update disease</NavDropdown.Item>
                            <NavDropdown.Item>Delete disease</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link to="/diseases/all" className="dropdown-item">Browse diseases</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Risk factors" id="basic-nav-dropdown" renderMenuOnMount={true}>
                            <NavDropdown.Item>Find risk factor</NavDropdown.Item>
                            <NavDropdown.Item>Add risk factor</NavDropdown.Item>
                            <NavDropdown.Item>Update risk factor</NavDropdown.Item>
                            <NavDropdown.Item>Delete risk factor</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                Browse risk factors
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Symptoms" id="basic-nav-dropdown" renderMenuOnMount={true}>
                            <NavDropdown.Item>Find symptom</NavDropdown.Item>
                            <NavDropdown.Item>Add symptom</NavDropdown.Item>
                            <NavDropdown.Item>Update symptom</NavDropdown.Item>
                            <NavDropdown.Item>Delete symptom</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                Browse symptoms
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="light">Search</Button>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavigationBar;
