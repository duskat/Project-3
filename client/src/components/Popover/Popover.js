import React from 'react';
import { Button, Popover, PopoverBody, PopoverHeader } from 'mdbreact';
import "./Popover.css"

class PopoverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      closeBttm:false,
      Annimation: "arrow animated zoomIn",
    }
  }

  hadleClick = () =>{
      this.props.myCallback(this.state.closeBttm);
        this.setState({
          Annimation: "arrow animated zoomOut",
        })
      }
    
  render(props) {
   
    return (
        <div className={this.state.Annimation}>
            <h3 className="popover-header">Sorry for inconvenience <button onClick={this.hadleClick} type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button></h3>
            <div className="popover-body">Rating can be added on <b>More Info</b> page by authenticated users only</div>
        </div>
    )
  }
}
export default PopoverPage;