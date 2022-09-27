import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button, Form} from "react-bootstrap";
import '../static/css/navigaton-bar.css'

const NavigationBar: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">ANCESTRALIZE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" variant="pills">
                        <NavDropdown title="Disease" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Find disease</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Add disease</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Update disease</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Delete disease</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Risk factors" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Find risk factor</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Add risk factor</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Update risk factor</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Delete risk factor</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Symptoms" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Find symptom</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Add symptom</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Update symptom</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Delete symptom</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                        {/*<Nav.Link href="#link">Link</Nav.Link>*/}
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
