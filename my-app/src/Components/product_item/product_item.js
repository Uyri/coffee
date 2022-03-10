import { Component } from "react";

import "../aboutsus/aboutsus.css";
import "../ourbest/ourbest.css";
import "./product_item.css";
import {Card} from 'react-bootstrap';

class Product_item extends Component {
    
    render() {
        const {name, price} = this.props;

        return (
                <div>
                    <Card style={{ width: '220px' }} className="card_margin">
                    <p className="imgCenter">
                        <Card.Img variant="top" className="cardImg"/>
                    </p>
                    <Card.Body>
                        <Card.Text className="card_text">
                        {name}
                        </Card.Text>
                        <Card.Text className="card_text card_text_price">
                            {price + "$"}
                            </Card.Text>   
                    </Card.Body>
                    </Card>
                </div>  
        )
    } 
}

export default Product_item;