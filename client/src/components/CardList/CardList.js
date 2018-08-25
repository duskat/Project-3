import React, { Component } from 'react';
import { Container, Row, Col, View, Mask, CardBody, Button, Fa, Card } from 'mdbreact';

class CardList extends Component {
  render() {
    return(
      <Container>
       <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our best projects</h2>
          <p className="grey-text w-responsive text-center mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>
          <Row>
            <Col lg="5" className="mb-lg-0 mb-5">
              <img src="https://mdbootstrap.com/img/Photos/Others/images/83.jpg" alt="Sample project image" className="img-fluid rounded z-depth-1" />
            </Col>
            <Col lg="7">
              <Row className="mb-3">
                <Col md="1" size="2">
                  <Fa icon="fa-money" size="2x" className="indigo-text"/>
                </Col>
                <Col md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Marketing</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="1" size="2">
                  <Fa icon="music" size="2x" className="pink-text"/>
                </Col>
                <Col md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Entertainment</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="1" size="2">
                  <Fa icon="smile-o" size="2x" className="blue-text"/>
                </Col>
                <Col md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Communication</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr className="my-5"/>
          <Row>
            <Col lg="7">
              <Row className="mb-3">
                <Col md="1" size="2">
                  <Fa icon="book" size="2x" className="cyan-text"/>
                </Col>
                <Col md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Education</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="1" size="2">
                  <Fa icon="code" size="2x" className="red-text"/>
                </Col>
                <Col md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Technology</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="1" size="2">
                  <Fa icon="money" size="2x" className="deep-purple-text"/>
                </Col>
                <Col md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Finance</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.</p>
                </Col>
              </Row>
            </Col>
            <Col lg="5">
              <img src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg" alt="Sample project image" className="img-fluid rounded z-depth-1"/>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default CardList;