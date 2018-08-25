import React from 'react';
import { Container, Row, Col, Button} from 'mdbreact';
import "./ProfileInfoEdit.css";
import API from "../../utils/API";

class ProfileInfoEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        editname: false,
        nameNewValue: "",
        name: props.name,
        editemail:false,
        emailNewValue: "",
    }

    this.hadleClickEditEmail=this.hadleClickEditEmail.bind(this)
    this.hadleClickEditName=this.hadleClickEditName.bind(this)
    this.handleChangeName=this.handleChangeName.bind(this)
    this.handleChangeEmail=this.handleChangeEmail.bind(this)

  }
  hadleClickEditName  = () =>{
      this.setState({
        editname:!this.state.editname
      })
      if (this.state.editname) {
          API.updateUserName(this.props._id, {"name": this.state.nameNewValue})
          .then(res =>{
            this.setState({
                name:res.data.name
            });
            console.log(res.data)
            this.props.stateChanger(res.data.name)
        })
      }}
      hadleClickEditEmail  = () =>{
        this.setState({
          editemail:!this.state.editemail
        })
        if (this.state.editemail) {
            console.log("Name need to be updated" , this.state.emailNewValue, this.props._id)
            API.updateUserName(this.props._id, {"email": this.state.emailNewValue})
            .then(res =>{console.log(res);
              
              this.setState({
                  email:res.data.email
              })    
              this.props.updateEmail(res.data.email)
          })
        }}

  handleChangeName = (event) => {
    this.setState({nameNewValue: event.target.value});
  }
  handleChangeEmail = (event) => {
    this.setState({emailNewValue: event.target.value});
  }


  render() {
    return (
        <Row>
        <Col size="md-12" className="text-center">
         <h4 className="my-3">Here is what we know about you</h4>
        
                
                {this.state.editname 
                    ?<Row className="justify-content-center">
                        <Col lg="4" className="profileInfoText">
                        
                        <p><i class="fa fa-user prefix grey-text"></i> <b>Your full name:</b> <input placeholder={this.props.name}  onChange={this.handleChangeName}  value={this.state.nameNewValue} ></input></p>
                        
                        </Col>
                        <Col lg="1">
                        <button onClick={this.hadleClickEditName} title="save"
                        type="button" className="btn-floating light-blue waves-effect"><i className="fa fa-save" aria-hidden="true"></i></button>
                        </Col>
                    </Row>
                    :<Row className="justify-content-center">
                        <Col lg="4" className="profileInfoText">
                        <p> <i class="fa fa-user prefix grey-text"></i> <b>Your full name:</b> {this.props.name}</p>
                        </Col>
                        <Col lg="1">
                        <button onClick={this.hadleClickEditName}  type="button" className="btn-floating teal waves-effect waves-light"><i className="fa fa-edit" aria-hidden="true"></i></button>
                        </Col>
                    </Row>}
                {this.state.editemail 
                    ?<Row className="justify-content-center">
                        <Col lg="4" className="profileInfoText">
                        <p><i class="fa fa-envelope prefix grey-text"></i><b>Your email</b>: <input placeholder={this.props.email} onChange={this.handleChangeEmail}  value={this.state.emailNewValue}></input></p>
                        </Col>
                        <Col lg="1" className="">
                        <button onClick={this.hadleClickEditEmail} title="save"
                        type="button" className="btn-floating light-blue waves-effect"><i className="fa fa-save" aria-hidden="true"></i></button>
                        </Col>
                    </Row>
                    :<Row className="justify-content-center">
                        <Col lg="4" className="profileInfoText">
                        <p><i class="fa fa-envelope prefix grey-text"></i> <b>Your email</b>: {this.props.email}</p>
                        </Col>
                        <Col lg="1" className="">
                        <button onClick={this.hadleClickEditEmail}  type="button" className="btn-floating teal waves-effect waves-light"><i className="fa fa-edit" aria-hidden="true"></i></button>
                        </Col>
                    </Row>}
          
        </Col>
      </Row>
    )} 
}

export default ProfileInfoEdit;