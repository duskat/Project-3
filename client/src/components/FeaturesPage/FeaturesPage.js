import React, { Component } from 'react';
import { Container, Row, Col, Fa, Button } from 'mdbreact';

class FeaturesPage extends Component {
  render() {
    return(
      <Container>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">There are so many credit cards on the market. Sometimes it hard to make your choice. Here are presented only those credit cards that I would like to recommend you to apply for.</p>
          <Row>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                  <Fa icon="percent" size="2x" className="blue-text"/>
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Best Deal</h4>
                  <p className="grey-text">Want to get the best sign in bonus. Go ahead and check best deals for you. I personally have all presented on website credit card. So be sure, this is really the best deal!</p>
                  <a href="/learnmore"><Button color="primary round" size="sm">Learn more</Button></a>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                  <Fa icon="signing" size="2x" className="pink-text"/>
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Win Win</h4>
                  <p className="grey-text">When you hit the apply button, submit your application and get approval I will receive a commission. In the same time, you will get the best offer on the market right now.</p>
                  <a href="/learnmore"><Button color="pink round" size="sm">Learn more</Button></a>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                  <Fa icon="coffee" size="2x" className="purple-text"/>
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Socializing</h4>
                  <p className="grey-text">You can always share what you think about a credit card. Each card has a comment box and rating. Help other people to make a right choice. Share your thoughts.</p>
                  <a href="/learnmore"><Button color="purple round" size="sm">Learn more</Button></a>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default FeaturesPage;