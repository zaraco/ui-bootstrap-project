import React from "react";
import {Col, Row} from "react-bootstrap";
import './Sell.css';


class Sell extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Row>
                 <Col md={{offset: 1, span: 4}}>
                     <h1 className="txt-sell">
                         Building  exactly the eCommerce website you want.
                     </h1>

                 </Col>

                    <Col md={{offset: 4, span: 1}}>

                        <img className="img-sell" src='/images/featured-image.png' alt=""/>


                    </Col>
                </Row>

            </div>
        );
    }
}

export default  Sell
