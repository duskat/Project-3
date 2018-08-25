import React, { Component } from "react";
import { Container, Row, Col } from 'mdbreact';
import API from "../utils/API"
import Form from "../components/Form"
import Card from "../components/Card"

class Search extends Component{
    constructor (props) {
        super(props);
        this.test = this.test.bind(this);
        this.first_name=this.props.first_name;
        this.state = {
            first_name:this.props.first_name,
            cards:[],
            bank: [] ,
            search: [],
            results: [],
            error: "",
            showBtm:true,
            udpdateRating:false
        }
        console.log(this.props)
    }
    // state = {
    //     cards:[],
    //     bank: [] ,
    //     search: [],
    //     results: [],
    //     error: "",
    //     showBtm:true,
    // };
    componentDidMount (){
        this.loadCards();
      }
      loadCards = () =>{
        API.getCards()
        .then(res =>{
        this.setState({
          cards:res.data,
        })
        this.state.cards.map(item =>
            {
                this.state.bank.push(item.bank)
            })
        const uniqueArray = (a) => a.filter((el, i) => a.indexOf(el) ===i);
        uniqueArray(this.state.bank)
        this.setState({
            bank: uniqueArray(this.state.bank)
        })
        }).catch(err => console.log(err))
      }
    test (search) {
        this.setState({
            search: search
        })
        console.log(this.state.search)
        API.getSearchResults(search)
        .then(res =>{
            this.setState({
                results:res.data,
                search: []
            })
            console.log(this.state.results)
        }    
    ).catch(err =>console.log(err))  
    }

    render() {
        return (
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h3 className="h2-responsive text-left my-5">
                            List of banks presenting credit cards:
                            </h3>  
                            <h5 className="my-3">Please select the banks and see what is your best offer!</h5>                  
                            <Row>
                                <Col>
                                    <Form bank={this.state.bank} callback={this.test}/>
                                </Col>
                            </Row>   
                            <Row>
                              <Col>
                                <Card cards={this.state.results} showBtm={this.state.showBtm} udpdateRating={this.state.udpdateRating}/>
                                {console.log(this.state.results, "try8-8")}
                              </Col>
                            </Row>                     
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Search;