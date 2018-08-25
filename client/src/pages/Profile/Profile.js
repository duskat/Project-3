import React, { Component } from "react";
import { Container, Row, Col, Button} from 'mdbreact';
import ProfileEditInfo from "../../components/ProfileInfoEdit";
import API from "../../utils/API";
import "./Profile.css";

class Profile extends Component {
    constructor (props) {
        super(props);   
        
        
        this.first_name=this.props.first_name;
        this.ProfileID=this.props.ProfileID;
        this.authId=this.props.userID
        
            this.state = {
                email:"",
                name:"",
                _id:"",
                comments: [],
                editname: false,
                editemail:false,
                update:false,
                value: ""

            };
            this.updateEmail=this.updateEmail.bind(this)
         
        }
    // hadleClickEditName  = () =>{
    //     this.setState({
    //         editname:!this.state.editname
    //     })
    //     if (this.state.editname) {
    //         console.log("Name need to be updated" , this.state.nameNewValue, this.props._id)
    //         API.updateUserName(this.props._id, {"name": this.state.nameNewValue})
    //         .then(res =>{console.log(res);
    //             this.setState({
    //                 name:res.data.name
    //             })    
    //         })
    //     }}
    updateEmail = (newEmail) =>{
        this.setState({
          email:newEmail
        })
      }    
    
    deleteComment = (id) =>{
        console.log(id)
        API.deleteComment(id)
        .then(res => this.getComments())
        .catch(err => console.log(err))
    }
    hadleUpdateButton = (id, body) =>{
        console.log(id)
        this.setState({
            update: !this.state.update,
            value:body
        })
    //    this.render()
    //     return ( this.state.comments.filter((id, comment)=>{
    //         <Row>
    //         <Col className="my-3">
    //             {this.state.update
    //             ?<div class="form-group shadow-textarea">
    //             <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="5" placeholder={comment.body} value={comment.body}></textarea>
    //             <Button color="success round btn-sm">Send</Button>
    //             </div>
    //             :<p className="card-text">{comment.body}</p>
    //             }
    //         </Col>             
    //     </Row>
    //     }))
    
    }

    handleChange = (event) =>{
        this.setState({value: event.target.value});
      }
    
    getComments = () => {API.getCommentsUser(this.authId).then(res =>{
            console.log(res)
            let commentsarray = [];
                res.data.map((comment) => { 
                    let date = new Date(comment.date);
                    commentsarray.push({"body":comment.body, "cardname":comment.cardname, "cardID":comment.cardID, "commentID":comment._id, "date": date.toDateString()})  
                    })
                this.setState({
                    comments:commentsarray
                })
                console.log(this.state.comments)
        })
        .catch(err => console.log(err));
    }

    componentDidMount(){
        console.log("component mounted")
        API.loadUser(this.authId).then(res =>{

            console.log(res)
            this.setState({
               email:res.data[0].email,
               name: res.data[0].name,
               _id:res.data[0]._id
            }); 
        }).catch(err => console.log(err));

        this.getComments();
  
    }
 
    render() {
        
        return (
            <Container style={{ marginTop: 30 }}>
              <Row>
                <Col size="md-12" className="text-center">
                 <h1>Hello {this.props.first_name}</h1>
                 {/* <p>Your ID is: <br />{this.authId}</p> */}
                </Col>
              </Row>
              {console.log(this.props.name)}
              {console.log(this.state._id)}
              {this.state._id !== null && this.state._id !== "" ?
                <ProfileEditInfo name={this.props.name} email={this.state.email} _id={this.state._id} hadleClickEditName={this.hadleClickEditName} editname={this.state.editname} stateChanger={this.props.stateChanger} updateEmail={this.updateEmail}/> : "" }
              <hr className="my-5" />   
              <Row>
                <Col className="text-center"> 
              <h3 className="my-3">Your comments:</h3> 
              {console.log(this.state.comments)} 
              {this.state.comments.map((comment, i)=>{
                  return(
                  
                  
                  <Row className="card w-100">
                    <Row lg="12" className="commentBox">
                    <Col lg="10" className="card-body">
                        <h5 className="card-title commentsHeader">{comment.cardname}</h5>
                    </Col>
                    <Col key={i} lg="2">
                        <button key={"delete" + i} onClick={() => this.deleteComment(comment.commentID)} className="btn-floating red waves-effect waves-light" title="Delete"><i class="fa fa-close" aria-hidden="true"></i></button>
                        
                        {/* <button key={"update" + i} onClick={() => this.hadleUpdateButton(comment.commentID, comment.body)} className="btn-floating teal waves-effect waves-light"  title="Update"><i className="fa fa-edit" aria-hidden="true"></i></button> */}
                    </Col>
                    </Row>
                    <Row>
                        <Col className="my-3">
                            {this.state.update
                            ?<div key={"update" + i} class="form-group shadow-textarea">
                            <textarea class="form-control z-depth-1" rows="5" placeholder={comment.body} onChange={this.handleChange} value={this.state.value}></textarea>
                            <Button color="success round btn-sm">Send</Button>
                            </div>
                            :<p className="card-text">{comment.body}</p>
                            }
                        </Col>             
                    </Row>
                  </Row>
                  
              )})
            }
                </Col>

              </Row>
            </Container>  
    )}
}

export default Profile; 