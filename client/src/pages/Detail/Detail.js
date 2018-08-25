import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col} from 'mdbreact';
import API from "../../utils/API";
import CardDetails from "../../components/CardDetails"
import Card from "../../components/Card"
import CommentBox from "../../components/Comments/CommentBox"

class Detail extends Component {
  constructor(props) {
    super(props);
    this.first_name=this.props.first_name;
    this.name = this.props.name
      this.state = {
        card: {},
        showBtm:false,
        udpdateRating: true,
        cards:[]
    }
  }


    componentDidMount(){
        API.getCard(this.props.match.params.id)
        .then(res => { this.setState({ card: res.data, cards: [res.data] })})
        .catch(err => console.log(err))
 
    }
    render(){
        if (this.state.card._id !== undefined) {
        
        return(
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                    <h2 className="h1-responsive text-center my-5"> {this.state.card.name} </h2>
                    </Col>
                </Row>
                  <Row>
                    <Col>
                      <Card cards={this.state.cards} props={this.props} showBtm={this.state.showBtm} cardID={this.props.match.params.id} udpdateRating={this.state.udpdateRating}/>
                    </Col>
                 </Row>
        <CardDetails className="text-center"
        APR={this.state.card.aPR}
        annualFee={this.state.card.annualFee}
        balanceTransfer = {this.state.card.balanceTransfer}
        intro = {this.state.card.intro}
        />
        <hr className="my-2" />
          <Row>
            <Col className="text-center">
              <h4 className="my-5">Hey {this.props.first_name}! Please let us know what do you think about {this.state.card.name || "this card"} </h4>
              <CommentBox 
              cardID={this.state.card._id} 
              userID={this.props.userID} 
              first_name={this.props.first_name}
              cardname={this.state.card.name}/>
            </Col>
          </Row>
           
            </Container>
        )
      } else {return(<p>loading</p>);}
    }
}


export default Detail