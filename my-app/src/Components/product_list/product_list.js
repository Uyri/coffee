
import Product_item from '../product_item/product_item';


import "./product_list.css";
import "../aboutsus/aboutsus.css";

import {Container, Row, Col} from 'react-bootstrap';

const ProductList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <Product_item key={id} {...itemProps}/>
        )
    })

    return (  
        <Container>
            <Row>
                <Col>
                    <div className="grid_card">
                        {elements}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default ProductList;