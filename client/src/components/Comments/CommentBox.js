import React, { Component } from "react";
import API from "../../utils/API"
import { Row, Col} from 'mdbreact';
import "./CommentBox.css"
import Testimonials from "../../components/Testimonials"


class CommentBox extends Component {
    constructor(props) {
        super(props);
        // console.log("id", this.props.cardID);
        this.state ={
            value:"",
            comments:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        API.getCommentsCard(this.props.cardID)
        .then(res => 
            {  console.log(res)
                let commentsarray = [];
                res.data.map((comment) => { 
                    let date = new Date(comment.date);
                    commentsarray.push({"body":comment.body, "username":comment.username, "date": date.toDateString()})  
                    })
                this.setState({
                    comments:commentsarray
                })
                console.log("this.state.comments", this.state.comments)
        })
              .catch(err => console.log(err));
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    

    handleSubmit = (event) =>{
        // console.log("here", this.props.userID, this.props.cardID +"\n"+
        // this.state.value , this.props.first_name,
        //  this.props.cardname)
        event.preventDefault();
        if (this.state.value) {
            API.create({
              body: this.state.value,
              userID: this.props.userID,
              cardID: this.props.cardID,
              username: this.props.first_name,
              cardname: this.props.cardname

            })
              .then(res => {
                  console.log(res)
                  let date = new Date(res.data.date);
                  let arr = this.state.comments
                  let obj = {
                    "body":res.data.body, 
                    "username":res.data.username, 
                    "date": date.toDateString()
                  };
                  arr.push(obj)
                 
                this.setState({
                    comments:arr
                })
                    console.log(this.state.comments)
                })
              .catch(err => console.log(err));
          }
          this.setState({value: ""})
    } 

    render() {
        return (
        <div>
            <div className="row text-center">
    
            <div className="col-md-6 text-center comment">
                <div className="widget-area no-padding blank">
                    <div className="status-upload">
                        <form onSubmit={this.handleSubmit}>
                            <textarea className = "comment-body" placeholder="Please share you opinion" onChange={this.handleChange}  value={this.state.value}></textarea>
                        
                            <button type="submit" 
                        className="btn btn-success green btn-rounded"><i className="fa fa-share"></i> Share</button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
       
            
           
            </div>
            </div>
            <hr class="my-5" />   
            <Row>
              <Col lg="12">
                <h4 className="my-2">Testimonials</h4>
                {this.state.comments.length > 0 ? <Testimonials comments={this.state.comments}/> : "There are no comments yet. Please share your opinion how do you like this card "}
              </Col>
            </Row>
        </div>
        )}
    }
export default CommentBox;