import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import './Sell.css';


class Sell extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="sell">
                    <Row>
                        <Col md={{offset: 1, span: 4}}>
                            <h1>
                                Building exactly the eCommerce website you want.
                            </h1>

                        </Col>

                        <Col md={{offset: 2, span: 5}}>

                            <img className="img-sell" src='/images/featured-image.png' alt=""/>

                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            <p>
                                WOO eCommerce is a customizable, open source eCommerce platform built on wordPress.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>

                            <Button>
                                Start a New Store
                            </Button>
                        </Col>

                    </Row>
                </div>
            </>
        );
    }
}

export default Sell
