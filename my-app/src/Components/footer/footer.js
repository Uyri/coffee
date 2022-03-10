import "../header/header.css";
import "./footer.css";

import {Container, Row, Col, Stack} from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col className="footer">
                    <Stack direction="horizontal" gap={4}>
                        <a href="" className="horizontal_text text_padding text_icon"></a>
                        <a href="" className="horizontal_text">Coffee house</a>
                        <a href="" className="horizontal_text">Our coffee</a>
                        <a href="" className="horizontal_text">For your pleasure</a>
                    </Stack>
                    <p className="text_icon2"></p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;