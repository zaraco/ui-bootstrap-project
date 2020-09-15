import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Col, Container, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component {

    constructor() {
        super();
    }


    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={12}>
                            <Navbar className='navbar' expand="md" fixed="top" variant="dark">
                                <Navbar.Brand href="/">
                                    <img className="navbar-logo" src='/images/logo.png' alt="logo"/>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="#">sell</Nav.Link>
                                        <Nav.Link href="#marketplace">Marketplace</Nav.Link>
                                        <Nav.Link href="#community">Community</Nav.Link>
                                        <Nav.Link href="#develop">Develop</Nav.Link>
                                        <Nav.Link href="#resources">Resources</Nav.Link>
                                    </Nav>
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                                <Router>
                                    <Switch>
                                        <Route exact path='/' />
                                        <Route path='/marketplace' />
                                        <Route path="/community" />
                                        <Route path="/develop" />
                                        <Route path="/resources" />
                                    </Switch>
                                </Router>

                        </Col>
                    </Row>
                </Container>
            </>

        );
    }

}

export default App;
