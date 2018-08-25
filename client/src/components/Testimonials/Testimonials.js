
import React, { Component } from "react";
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';
import "./Testimonials.css"


class Testimonials extends Component {
    constructor(props) {
        super(props);
        // console.log("id", this.props.cardID);
        this.state = {"count": 0}
        this.timer = this.timer.bind(this);
        
    }
    componentDidMount(){
        let intervalId = setInterval(this.timer, 3000);

    }

    timer () {
        this.setState({count: (this.state.count + 1 === this.props.comments.length ? 0 : this.state.count + 1)});
    }

    render() {
        
        return (
        <div>
       
        <div id="carousel-example-2" className="carousel slide carousel-fade carousel no-flex testimonial-carousel" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
      {
          this.props.comments.map((comment, i) => {

            
            
            return (
                <div className={`carousel-item ${(i === this.state.count ? "active" : "")}`}>
                    <div className="view">
                        <p> <i className="fa fa-quote-left"></i> {comment.body}</p>
                        <p className="blockquote-footer mb-3"><cite>{comment.username}<br/>{comment.date}</cite></p>
                    {/* <div className="mask rgba-black-light"></div> */}
                    </div>
                {/* <div className="carousel-caption"> */}
                    {/* <h3 className="h3-responsive">Light mask</h3> */}
                   
                {/* </div> */}
                </div>
            )
    })}
    </div>
   
    <a className="carousel-item-prev carousel-control-prev left carousel-control" href="#carousel-example-2" role="button" data-slide="prev">
                    <span className="icon-prev" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
    <a className="carousel-item-next carousel-control-next right carousel-control" href="#carousel-example-2" role="button" data-slide="next">
                    <span className="icon-next" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

  
</div>
    </div>
        )}
        }
export default Testimonials;