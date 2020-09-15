import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Col, Form, Nav, Navbar, Row} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Sell from './components/Sell';


class App extends React.Component {

    constructor() {
        super();
    }


    render() {
        return (
            <>
                <Row>
                    <Col md={12}>
                        <Navbar className='navbar' expand="md">
                            <Navbar.Brand href="/#">
                                <img className="navbar-logo"
                                     src='/images/logo.png' alt="logo"/>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto" style={{marginLeft: '107px'}}>
                                    <Nav.Link href="#">sell</Nav.Link>
                                    <Nav.Link href="#marketplace">Marketplace</Nav.Link>
                                    <Nav.Link href="#community">Community</Nav.Link>
                                    <Nav.Link href="#develop">Develop</Nav.Link>
                                    <Nav.Link href="#resources">Resources</Nav.Link>
                                </Nav>
                                <Form inline >
                                    <Nav.Link style={{color: 'black'}} href="#login">Login</Nav.Link>
                                    <Button>Get Started</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                        <Router>
                            <Switch>
                                <Route exact path='/' component={Sell}/>
                                <Route path='/marketplace'/>
                                <Route path="/community"/>
                                <Route path="/develop"/>
                                <Route path="/resources"/>
                            </Switch>
                        </Router>

                    </Col>
                </Row>
            </>

        );
    }

}

export default App;
