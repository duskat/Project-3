import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {Navbar as Nav} from 'mdbreact';

class Navbar extends Component{
  constructor(props) {
    super(props);
    this.state = props;
    console.log(props.first_name)
  }

  componentDidUpdate( newProps) {

   // this.props = newProps;
   console.log(newProps.name)
   if (newProps.name !== this.state.name){
    this.setState(newProps);
   }
  }
  render(){
    console.log(this.props.first_name)
 return(
      <Nav light color="blue-grey navbar-collapse lighten-5" id="navbarSupportedContent-6" expand="xl">
        <a className="navbar-brand" href="/">Credit Cards Finder</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-5" aria-controls="navbarSupportedContent-5" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-5">
        <ul className="navbar-nav mr-auto">
          <li
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/about"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/best-choice"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link to="/best-choice" className="nav-link">
              Best Choice
            </Link>
          </li>
          <li
            className={
              window.location.pathname === "/search"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>
      </ul>  
        <div  className="form-inline">
          {!this.props.auth.isAuthenticated() ?
          (<button className="btn btn-light-blue round" onClick={this.props.auth.login}>Sign in</button>) :
          (<ul className="navbar-nav ml-auto nav-flex-icons">
          {console.log(this.props.first_name)}
            <li className="nav-item navbarName">Hi, {this.props.first_name}! 
            </li>
            <li className="nav-item avatar dropdown">
              <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="img-thumbnail rounded-circle" src={this.props.picture} alt={this.props.name}/>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-purple" aria-labelledby="navbarDropdownMenuLink-5">
              <a className="dropdown-item waves-effect waves-light" href={"/users/" + this.props.userID}>Profile page</a>
              <a className="dropdown-item waves-effect waves-light" onClick={this.props.auth.logout} href="">Logout</a>
              </div>
            </li>
          </ul>)}
        </div>       
      </div>
      </Nav>
)}

  }
export default Navbar;
