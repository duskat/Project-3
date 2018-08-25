import React, { Component } from "react";
import { Button } from 'mdbreact';
import "./Form.css"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state ={
            value: [],
            // isChecked:false
        }  
        this.handleCheckBoxOnChange = this.handleCheckBoxOnChange.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this)
      }

      handleSubmitClick = (e) =>{
          e.preventDefault();
          console.log(this);
          this.props.callback(this.state.value);
          this.setState({
            //   isChecked:false
          })
          var element= document.getElementsByClassName("form-check-input");
          for(var i = 0; i <element.length; i++){
              element[i].checked=false;
          }
            //   for (let i in document.getElementsByClassName("form-check-input")) { document.getElementsByClassName("form-check-input")[i].checked= false };
         
      }

      handleCheckBoxOnChange = (event) =>{
        let value = Array.from(this.state.value);
        console.log(event.target.checked, value.indexOf(event.target.value) === -1)
        if (event.target.checked && value.indexOf(event.target.value) === -1) {
            value.push(event.target.value);
        } else if (!event.target.checked && value.indexOf(event.target.value) != -1) {
            value.splice(value.indexOf(event.target.value), 1)
        }
        this.setState({
            value: value,
            // isChecked:!this.state.isChecked
        });
        // if (!this.state.isSelected){
        //     this.setState({
        //         value: ""
        //     })
        // }
        console.log(this.state)
      }

      render() {
        return (
        <div>
            {this.props.bank.map(item =>
            <span key={item}>
                <div className="form-check">
                    <label className="form-check-label">
                    <input className="form-check-input" checked={this.state.isChecked} onChange={this.handleCheckBoxOnChange} type="checkbox" id="blankCheckbox" value={item} aria-label="..." />
                    {item}
                    </label>
                </div>
                
                </span>
                )}
            <Button color="primary round" onClick={this.handleSubmitClick} >Submit</Button>
        </div>
        )}
}


export default Form;