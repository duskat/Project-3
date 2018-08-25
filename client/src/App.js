import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";
import Callback from "./components/callback";
import Auth from "./Auth"
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import AccessDenied from "../src/components/AccessDenied";
import LearnMore from "../src/pages/LearnMore"
// import { startOfQuarter } from "date-fns";
import API from "./utils/API"
const auth = new Auth();
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: auth.getProfile().name,
      picture: auth.getProfile().picture,
      // first_name: auth.getProfile().given_name,
      first_name: "",
      userID: auth.getProfile().sub,
      nickname: auth.getProfile().nickname,
      email: "",
      auth,
      profileID: "",
      response: [],
      THINGYTHING: ""
    }
    this.updateName = this.updateName.bind(this)
    this.updateEmail = this.updateEmail.bind(this)


    if (this.state.userID !== undefined) {
      this.state.email = (this.state.userID.substring(0, 6) === "google" ? this.state.nickname + "@gmail.com" : this.state.name);
      this.state.first_name = (this.state.userID.substring(0, 6) === "google" ? this.state.first_name : this.state.nickname)
    }
    // var firstnameSplit = this.state.name.split(" ")[0]

    let userData = {
      name: this.state.name,
      authId: this.state.userID,
      email: this.state.email,
      response: []
    }
    console.log(this.state.userID)
    API.loadUser(this.state.userID).then(res => {
      console.log(res);
      userData.response = res.data
      if (res.data.length > 0) {
        const firstname = res.data[0].name.split(" ")
        this.setState({
          name: res.data[0].name,
          first_name: firstname[0]

        })

      } else {
        // this.state.name=auth.getProfile().name;
        API.saveUser(userData)
          .then(res => {
            this.setState({
              profileID: res.data._id
            })
          })
          .catch(err => console.log(err))


      }
    })

  }

updateName = (newVal) => {
  console.log("update name ", newVal)
  let firstName = newVal.split(" ");
  this.setState({
    first_name: firstName[0],
    name: newVal
  })
}

updateEmail = (newEmail) =>{
  this.setState({
    email:newEmail
  })
}

render(){
return (
  <Router>
    <div>
      
      <Navbar name={this.state.name} auth={this.state.auth} first_name={this.state.first_name} picture={this.state.picture} profileID={this.state.profileID} userID={this.state.userID} /> 
      <Wrapper >
      <Switch>
        <Route exact path="/" render= {(name) => (
          <About name={this.state.name} />
        )}  />
        <Route exact path="/about" component={About} />
        <Route exact path="/learnmore" component={LearnMore} />
        <Route exact path="/best-choice" render ={(props) => (
          < Discover {...props}/>  
        )} />
        {/* <Route exact path="/search" render = {(first_name) =>(<Search first_name={this.state.first_name}/>)} /> */}
        <Route exact path="/search" render= {() => (
          <Search first_name={this.state.first_name} />
        )}  />
        <Route exact path="/callback" component={Callback} />
        
        <Route exact path="/cards/:id" render={ (props) =>(
          this.state.auth.isAuthenticated() ? <Detail {...props} first_name={this.state.first_name}
          userID={this.state.userID}/>  : <AccessDenied auth={this.state.auth} /> 
        )}  />
        <Route exact path="/users/:id" render={ (props) =>(
          this.state.auth.isAuthenticated() ? <Profile {...props} name={this.state.name} first_name={this.state.first_name} profileID={this.state.profileID} userID={this.state.userID} stateChanger={this.updateName} updateEmail={this.updateEmail}/>  : <AccessDenied auth={this.state.auth} /> 
        )}  />
        <Route component={NoMatch} />
        </Switch>
      </Wrapper>
      <Footer style={{display: "none"}} />
    </div>
  </Router>
)}

}

export default App;
