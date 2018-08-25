import React, { Component } from 'react';
import { Container, Row, Col, Fa, Button } from 'mdbreact';
import ("./LearnMore.css")

class LearnMore extends Component {
  render() {
    return(
      <Container>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Want to Learn More About Application?</h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">Hi there!     My name is Dzmitry. I am a full stack developer.  
              In 2018 I graduated UNCC coding Bootcamp. And this is my final project. <br/>
              The whole point of this application is to give you my personal recpmendations what credit cards are the best for you.
              </p>
          <Row>
            <Col md="4">
            <h2 className="font-weight-bold mb-5">Application Advantages</h2>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="percent" size="2x" className="blue-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Sign up Bonus</h5>
                  <p className="grey-text">Want to get the best sign in bonus. Go ahead and check best deals for you. I personally have all presented on website credit card. So be sure, this is the best deal!  </p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="signing" size="2x" className="pink-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Win Win</h5>
                  <p className="grey-text">When you hit the apply button, submit your application and get approval I will receive a commission. In the same time, you will get the best offer on the market right now.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="coffee" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Socializing</h5>
                  <p className="grey-text">You can always share what you think about a credit card. Each card has a comment box and rating. Help other people to make a right choice. Share your thoughts.</p>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="text-name">
              <img className="img-fluid img-responsive" src="https://lh6.googleusercontent.com/--y_YTdkur3Q/AAAAAAAAAAI/AAAAAAAAALI/khrasMMn5qM/photo.jpg" alt="Sample image" />
            </Col>
            <Col md="4">
            <h2 className="font-weight-bold mb-5">Technologies in Use</h2>
              <Row className="mb-3">
                <Col size="2">
                  <img src="http://indigo.amsterdam/wp-content/uploads/2017/06/React-icon.svg_-e1498055414258.png" size="2x" className="react"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Front End: React</h5>
                  <p className="grey-text">React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                <img src="https://www.gfxmag.com/wp-content/uploads/2016/07/nodejs-icon-vector-logo.jpg" size="2x" className="node"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Back End: Express Node.js</h5>
                  <p className="grey-text">Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                <img src="http://www.sryitsolutions.com/wp-content/uploads/2016/10/MongoDB-SRY-IT-Solutions.png" size="2x" className="react"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Database: MondoDB</h5>
                  <p className="grey-text">MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default LearnMore;