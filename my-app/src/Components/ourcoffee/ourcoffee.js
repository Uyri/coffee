import "../header/header.css";
import "./ourcoffee.css";

import {Container, Row, Col, Stack} from 'react-bootstrap';

const OurCoffee = () => {
    return (
        <Container>
            <Row>
                <Col className="ourcoffee">
                    <Stack direction="horizontal" gap={4}>
                        <a href="" className="horizontal_text text_padding text_icon"></a>
                        <a href="" className="horizontal_text">Coffee house</a>
                        <a href="" className="horizontal_text">Our coffee</a>
                        <a href="" className="horizontal_text">For your pleasure</a>
                    </Stack>
                    <h1>Our Coffee</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default OurCoffee;