import Product_item from '../product_item/product_item';

import "../aboutsus/aboutsus.css";
import "./ourbest.css";
import {Container, Row, Col} from 'react-bootstrap';

const OurBest = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <Product_item key={id} {...itemProps}/>
        )
    })

    return (
        <Container>
            <Row>
                <Col className="descr descr_color">
                    <h2>Our best</h2>
                    <div className="grid_card">
                        {elements}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default OurBest;