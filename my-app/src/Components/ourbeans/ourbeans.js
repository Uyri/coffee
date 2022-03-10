
import "./ourbeans.css";
import "../aboutsus/aboutsus.css";

import {Container, Row, Col} from 'react-bootstrap';

const OurBeans = () => {
    return (
        <Container>
            <Row className="ourbeans">
                <Col><p className="ourbeans_img"></p></Col>
                <Col className="descr">
                    <h2>About our beans</h2>
                    <p className="text_icon2"></p>
                    <p className="descr_text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <br/>
                    <p className="descr_text">Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions.</p> 
                    <p className="descr_text">As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.</p>
                </Col>
            </Row>
            <Row>
                <Col className="line"><hr/></Col>
            </Row>
        </Container>
    )
}


export default OurBeans;