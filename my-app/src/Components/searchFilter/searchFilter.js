
import {Container, Row, Col, Button} from 'react-bootstrap';

import "../product_list/product_list.css";
import "../searchPanel/searchPanel.css";
import "./searchFilter.css";

const SearchFilter = (props) => {
    const buttonsData = [
        {name: 'Reset', label: 'Reset'},
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        return (
            <Button
                variant=""
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
            </Button>
        )
    }) 

    return (
        <Container>
            <Row className='row_grid'>
                <Col className="product_list product_list__btn">        
                    {buttons}
                </Col>
            </Row>
        </Container>
    )
}

export default SearchFilter;