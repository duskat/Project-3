import React from "react";
import "./Footer.css";

let style = {
  display: "block"
}

let show = true;

function changeDisplay (){ 
  show = !show;
  
}

const Footer = (props) => (
  <footer className="page-footer font-small blue-grey lighten-5">
    <div className="footer-copyright text-center py-3" style={(show ? style : {})}>
     © 2018 Copyright: Credit Cards Finder
  </div>
  </footer>
);

export default Footer;
