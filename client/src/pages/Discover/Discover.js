import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";

// import Container from "../../components/Container";
// import Row from "../../components/Row";
// import Col from "../../components/Col";
import { Container, Row, Col } from 'mdbreact';
import API from "../../utils/API"
import "./Discover.css"
// import { isYesterday } from "date-fns";
import Card from "../../components/Card"

class Cards extends Component {
  // Initialize this.state.Cards as an empty array
  state = {
    cards: [],
    showBtm:true,
    udpdateRating:false
  };
  componentDidMount (){
    this.loadCards();
  }
  loadCards = () =>{
    API.getCards()
    .then(res =>{
      console.log(res);
    this.setState({
      cards:res.data,
    })}).catch(err => console.log(err))
  }

  render() {
    return (
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
              <h2 className="h1-responsive text-center my-5">Credit Cards That Meet Your Needs</h2>
              <p className="grey-text w-responsive text-center mx-auto mb-5">We found awesome credit cards for you with great sign in bonus </p>
          <Card cards={this.state.cards} showBtm={this.state.cards} udpdateRating={this.state.udpdateRating}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
