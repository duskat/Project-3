import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, CardGroup } from 'mdbreact';
import "./CardGroup.css";

class cardGroup extends React.Component {
    render() {
      return (
        <CardGroup>
            <Card>
            <a href="http://refer.amex.us/DZMITP6LuB?xl=cp27" target="__blank"><CardImage src="https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/platinum-card.png" alt="Card image cap" top hover overlay="white-slight"/></a>
                <CardBody>
                    <CardTitle tag="h5">The Platinum Card® from American Express</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <a href="http://refer.amex.us/DZMITP6LuB?xl=cp27" target="__blank"><Button color="primary round">Apply Now</Button></a>
                </CardBody>
            </Card>
            <Card>
                <a href="https://refer.discover.com/s/r5sdh" target="__blank"><CardImage src="https://www.discover.com/credit-cards/images/cards/CardArt_W_Cash_Blue.png" alt="Card image cap" top hover overlay="white-slight"/></a>
                <CardBody>
                    <CardTitle tag="h5">Discover it®  Credit Card with Great Cash Back</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <a href="https://refer.discover.com/s/r5sdh" target="__blank"><Button color="primary round">Apply Now</Button></a>
                </CardBody>
            </Card>
            <Card>
                <a href="http://refer.amex.us/DZMITPBLTZ?xl=cp27" target="__blank"><CardImage src="https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/CardArt/Card-Tiles/L-Desktop/blue-cash-preferred.png" alt="Card image cap" top hover overlay="white-slight"/></a>
                <CardBody>
                    <CardTitle tag="h5">Cash Preferred® Card from American Express</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <a href="http://refer.amex.us/DZMITPBLTZ?xl=cp27" target="__blank"><Button color="primary round">Apply Now</Button></a>
                </CardBody>
            </Card>
        </CardGroup>
    )
}
}

export default cardGroup;