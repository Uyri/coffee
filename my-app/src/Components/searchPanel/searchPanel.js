import { Component } from 'react';
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';

import "../product_list/product_list.css";
import "./searchPanel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render() {
        const {term} = this.props
        
        return (  
            <Container>
                <Row>
                    <Col className="product_list">
                        <p className="text1">Lookiing for</p>
                        <InputGroup>
                            <FormControl
                                type="text"
                                placeholder="start typing here..."
                                aria-label="start typing here..."
                                aria-describedby="btnGroupAddon"
                                value={term}
                                onChange={this.onUpdateSearch}
                            />
                        </InputGroup>
                        <p className="text2">Or filter</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SearchPanel;