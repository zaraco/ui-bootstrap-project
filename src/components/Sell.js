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
                        <Col md={{offset: 0, span: 3}}>
                            <h1>
                                Building exactly the eCommerce website you want.
                            </h1>
                            <br/>

                            <p>
                                WOO eCommerce is a customizable, open source eCommerce platform built on wordPress.
                            </p>
                            <br/>

                            <Button>
                                Start a New Store
                            </Button>

                        </Col>

                        <Col md={{offset: 3, span: 6}}>

                            <img className="img-sell" src='/images/featured-image.png' alt=""/>

                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Sell
