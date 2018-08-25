    import React, { Component } from "react";
    import API from "../../utils/API"
    import PopoverPage from "../../components/Popover/Popover"
    import "./Stars.css"

    class Stars extends Component {
        constructor(props) {
            super(props);
            this.handleHover = this.handleHover.bind(this);
            this.state ={
                isHovered: [false, false, false, false, false],
                isClicked: [false, false, false, false, false],
                value:0,
                taggle:false,
                counter: 0,
                rating:0,
                totalStartsValue: 0,
                currentRating: 0,
                valueToPost:0,
                counterFromResponce:0,
                averageRating: 0
            }}
        
        componentDidMount(){
            const valueToUddate= {
                "_id": `${this.props.cardID}`,
                "rating":0,
                "counter":0
            }
            API.getStars(valueToUddate).then(res =>{
                    
                var averageRating = res.data[0].rating / res.data[0].counter
                // console.log("rating :" +  res.data[0].rating + `\n` + "counter: " + res.data[0].counter + `\n` + averageRating)
                
                this.setState({
                    totalStartsValue:parseInt(res.data[0].rating),
                    counterFromResponce: (parseInt(res.data[0].counter))
                })


                let tempState = {};
                tempState.averageRating = (this.state.counterFromResponce > 0 ? (parseInt(res.data[0].rating) / parseInt(res.data[0].counter)) : 0)
                let stars = [false, false, false, false, false]
                for (let i = 0; i < Math.round(tempState.averageRating); i++) {
                    stars[i] = true;
                }
                tempState.isClicked = stars;
                this.setState(tempState)
            })
               
        }
        handleHover = (e) => {
            if (this.props.udpdateRating) {
            let isHovered = this.state.isHovered;
            for (let i = 0; i < e.target.dataset.number; i++) {
                isHovered[i] = !isHovered[i];
            }
            this.setState({
                isHovered: isHovered
            });
        }
        }
        

        handleClick = (event) =>{

            
            if(this.props.udpdateRating){   
                const startvalue = event.target.dataset.number;
                let stars = [false, false, false, false, false]
                for (let i = 0; i < startvalue; i++) {
                    stars[i] = true;
                }
                this.setState({
                    value: parseInt(startvalue),
                    isClicked: stars,
                    counter: parseInt(this.state.counter) +1
                }); 
                // const valueToUddate= {
                //     "_id": `${this.props.cardID}`,
                //     "rating":this.state.valueToPost,
                //     "counter":this.state.counter+1
                // }
                // API.getStars(valueToUddate).then(res =>{
                //     // console.log(res)
                //     this.setState({
                //         totalStartsValue:parseInt(res.data[0].rating),
                //         // counter:res.data[0].counter
                //         valueToPost: (parseInt(res.data[0].rating) + parseInt(this.state.value))
                //     })
                   
                //     valueToUddate.rating = (parseInt(res.data[0].rating) + parseInt(this.state.value))

                //     console.log("Curent value: " + this.state.value +  `\n`+ "click counter: " + this.state.counter 
                //     + `\n`+ "total value in respoce: " + (parseInt(res.data[0].rating))
                //     + `\n`+ "total value to post: " + (parseInt(res.data[0].rating) + parseInt(this.state.value)))            

                //     let currentRating = parseInt(res.data[0].rating)/ parseInt(this.state.counter)

                //     this.setState({
                //         currentRating:currentRating
                //     })
                // })
                // .catch(err => console.log(err))
                // // .then(res =>this.setState({
                // //     totalStartsValue:res.data[0].rating,
                // //     counter:res.data[0].counter
                // }))
            // .then(this.postStars({
            //     "_id": `${this.props.cardID}`,
            //     "rating":this.state.valueToPost,
            //     "counter":this.state.counter+1
            // }))
            var toPost = {
                "_id": `${this.props.cardID}`,
                "rating": startvalue,
                // "counter":this.state.counter+1
            }
            console.log(toPost);
            this.postStars(toPost)
            }
            else{
                this.setState({
                    taggle: !this.state.taggle,
                }); 
            } 
        }

        myCallback = (value) => {
           this.setState({
            taggle:value
           })
        }

        postStars = (value) =>{
            API.PostSrars(value)
            .then(res =>{
                console.log(res)
                this.setState({
                    totalStartsValue:parseInt(res.data.rating),
                    counterFromResponce: (parseInt(res.data.counter)),
                    averageRating: (parseInt(res.data.rating) / parseInt(res.data.counter))
                })
                const numStars = Math.round(this.state.averageRating);
                this.setState({

                })
                console.log(this.state)
            })
            .catch(err => console.log(err))
        }

        // getStars = (value) =>{
        //     API.getStars(value)
        //     .then(res =>{
        //         console.log(res)
        //     })
        //     .catch(err => console.log(err))
        // }

        render() {
            this.state.isHovered ? "fa fa-star" : "fa fa-star-o";
            // console.log(this.state.isHovered);
            
            return (
            <div className="text-center stars">
            {this.state.taggle ? <PopoverPage myCallback={this.myCallback} /> : <h2></h2> }
                {this.state.isHovered.map((hover, i) => {
                    
                return (<i key={i} data-number={i+1} className={(hover || this.state.isClicked[i] ? "fa fa-star pops" : "fa fa-star-o pops")} onClick={this.handleClick} onMouseOver={this.handleHover} onMouseOut={this.handleHover}></i>)
                
            })}
            <div className="currentRating">
            {!this.props.cardID ? "" : (!this.props.cardID ? "" : `Total rating is ${this.state.averageRating.toFixed(2)}`)}
            </div>
          </div>
            )
        }
    }

    export default Stars;
