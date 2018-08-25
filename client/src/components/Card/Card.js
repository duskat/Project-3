import React, { Component } from "react";
import CardBtn from "../CardBtn/CardBtn";
import "./Card.css";
import Stars from "../../components/Stars"
import { Row, Col } from 'mdbreact';

class Card extends Component{
  constructor (props) {
    super(props);
    this.state = {
      udpdateRating:this.props.udpdateRating,
      cards:this.props.cards,
      cardID:this.props.cardID
    }
    console.log(this.props.cardID)
  }

  render() {
    return (
        <section>
            {this.props.cards.length ? (
              <span>
                {this.props.cards.map(item => (
                <span key={item._id}>
                  <Row>
                    {this.props.cards.length !== 1 || window.location.pathname === "/search"
                    ?<Col size="md-12">
                      <h3 className="h2-responsive text-left my-5">
                      {item.name}
                      </h3>
                    </Col>
                    : false}
                  </Row>
                <Row>
            <Col lg="3" className="mb-lg-0 text-center mb-5">
              <img src={item.img} alt={item.name} className="img-fluid rounded radius z-depth-1" />
              <div className="text-center">
                <a href={item.link} target="_balnk" ><button className="btn blue-gradient btn-rounded">Apply</button></a>
                {this.props.showBtm ?
                (<a href={"/cards/" + item._id}><button className="btn peach-gradient btn-rounded">More Info</button></a>) : ""
                }
              </div>
            <Stars udpdateRating={this.state.udpdateRating} cardID={item._id}/> 
            </Col>
            <Col lg="9">
              <Row className="mb-3">
                <Col md="11" size="12">
                  <h5 className="mb-3"><i className="fa iconLg fa-money" aria-hidden="true"></i>  Bonus:</h5>
                  <ul className="listNone">
                  <li><i className="fa fa-check" aria-hidden="true"></i>{item.bonus}</li>
                  </ul>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="11" size="12">
                  <h5 className="mb-3"><i className="fa iconLg fa-trophy stars" aria-hidden="true"></i>  Rewards:</h5>
                  {item.rewards ? ( 
                <ul className="listNone">
                {item.rewards.map(rewards => (            
                      <li key={rewards}>
                      <i className="fa fa-check" aria-hidden="true"></i>   
                        {rewards} 
                      </li>
                  ))}
                  </ul>
                ) : (
                  <h3>No Results to Display :  </h3>
                  
                )}
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr className="my-2"/>
                    </span>
                    ))}
                  </span>
                ) : (
                 <span>
                 {}
                 </span>
                )}
          </section>
        )}
};

export default Card;
