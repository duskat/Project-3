import React from "react";
import { Row, Col} from 'mdbreact';
import "./CardDetails.css"; 

const CardDetails = props =>(

   <Row>
       <Col  className="justify-content-cente ">
            <Row>
                <Col className="content-cente">
                <h3 className="h3-responsive text-center my-4">Card's Details:</h3>
                </Col>
            </Row>
            <Row className="justify-content-center text-center my-4 detailsIcon column">
                <Col lg="3" sm="12"><i className="fa fa-percent" aria-hidden="true"></i>
                    <Col className="justify-content-center text-center my-1 cadrDetailsHeading" >Standard APR:</Col>
                    <Col>{props.APR}</Col>
                </Col>
                <Col lg="3" sm="12"><i className="fa fa-dollar" aria-hidden="true"></i>
                    <Col className="justify-content-center text-center my-2 cadrDetailsHeading" >Annual Fee:</Col>
                    <Col>{props.annualFee}</Col>
                </Col>
                <Col lg="3" sm="12"><i className="fa fa-exchange" aria-hidden="true"></i>
                    <Col className="justify-content-center text-center my-2 cadrDetailsHeading" >Balance Transfer:</Col>
                    <Col>{props.balanceTransfer}</Col>
                </Col>
                <Col lg="3" sm="12"><i className="fa fa-credit-card" aria-hidden="true"></i>
                    <Col className="justify-content-center text-center my-2 cadrDetailsHeading" >Introductory APR:</Col>
                    <Col>{props.intro}</Col>
                </Col>
            </Row>
             
        </Col>
    </Row>  
    

);

export default CardDetails