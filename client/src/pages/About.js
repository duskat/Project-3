import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import CardGroup from '../components/CardGroup';
import FeaturesPage from "../components/FeaturesPage"
import {Button} from 'mdbreact';

const About = (props) => 
<div>
    <Hero backgroundImage="https://cdn.gobankingrates.com/wp-content/uploads/2018/04/amex20platinum20shutterstock_640304860.jpg">
    <div className="applyNow">
        <h1>American express platinum</h1>
        <br />
        <h2 >Explore the Power of the Platinum Card</h2>
        <button type="button" className="btn btn-primary round Ripple-parent"><a href="http://refer.amex.us/DZMITP6LuB?xl=cp27" target="__blank">Apply Now</a></button>
        </div>
    </Hero>
    <Container style={{ marginTop: 30 }}>
    <Row className="text-center">
        <Col size="md-12" >
        
        {props.name ? <h1>Hello {props.name}! <br />Welcome To Credit Cards Finder!</h1> : <h1>Hello!<br />Welcome To Credit Cards Friends Club! </h1>}
      
        </Col>
    </Row>
    <Row>
      
            <CardGroup />

    </Row>
    <Row>
        <FeaturesPage />
    </Row>
    </Container>
</div>


export default About;