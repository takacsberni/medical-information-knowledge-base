import React, {useState, MouseEvent} from "react";
import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';

import {Button, Form} from "react-bootstrap";
import '../static/css/navigaton-bar.css'
import {Link} from "react-router-dom";

const NavigationBar: React.FC = () => {

    const [showMenuDisease, setShowMenuDisease] = useState(false);
    const showDropdown = (e: MouseEvent):void => {
        setShowMenuDisease(!showMenuDisease);
    }
    const hideDropDown = (e: MouseEvent<HTMLButtonElement>) => {
        setShowMenuDisease(false);
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">ANCESTRALIZE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" variant="pills">
                        <NavDropdown title="Disease" id="basic-nav-dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropDown} show={showMenuDisease}>
                            <NavDropdown.Item>Find disease</NavDropdown.Item>
                            <NavDropdown.Item>Add disease</NavDropdown.Item>
                            <NavDropdown.Item>Update disease</NavDropdown.Item>
                            <NavDropdown.Item>Delete disease</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link to="/diseases/all" className="dropdown-item">Browse diseases</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Risk factors" id="basic-nav-dropdown">
                            <NavDropdown.Item>Find risk factor</NavDropdown.Item>
                            <NavDropdown.Item>Add risk factor</NavDropdown.Item>
                            <NavDropdown.Item>Update risk factor</NavDropdown.Item>
                            <NavDropdown.Item>Delete risk factor</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Symptoms" id="basic-nav-dropdown">
                            <NavDropdown.Item>Find symptom</NavDropdown.Item>
                            <NavDropdown.Item>Add symptom</NavDropdown.Item>
                            <NavDropdown.Item>Update symptom</NavDropdown.Item>
                            <NavDropdown.Item>Delete symptom</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
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
