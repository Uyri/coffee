import "./header.css";

import {Container, Row, Col, Stack} from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <Row>
                <Col className="header">
                    <Stack direction="horizontal" gap={4}>
                        <a href="" className="horizontal_text text_padding text_icon"></a>
                        <a href="" className="horizontal_text">Coffee house</a>
                        <a href="" className="horizontal_text">Our coffee</a>
                        <a href="" className="horizontal_text">For your pleasure</a>
                    </Stack>
                    <h1>Everything You Love About Coffee</h1>
                    <p className="text_icon2"></p>
                    <h3>We makes every day full of energy and taste</h3>
                    <h3>Want to try our beans?</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;