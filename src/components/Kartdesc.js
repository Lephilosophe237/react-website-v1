import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import "./kartstyle.css"

function Choix({ Category, price, Engine, Manufacter, Gearsbox, id , Karting, img, }) {
    return (
        <Card id= "carte" className='m-2' style={{ width: '18rem' }}>
            <Card.Img className="imgkart" variant="top" src={img} alt='karting'/>
            <Card.Body>
                <Card.Title>{Karting}</Card.Title>
                <Card.Text>
                    <Row>
                        <Col>Category:</Col>
                        <Col>{Category}</Col>
                    </Row>
                    <Row>
                        <Col>Engine:</Col>
                        <Col>{Engine}</Col>
                    </Row>
                    <Row>
                        <Col>Manufacter:</Col>
                        <Col>{Manufacter}</Col>
                    </Row>
                    <Row>
                        <Col>Gearsbox:</Col>
                        <Col>{Gearsbox}</Col>
                    </Row>
                    <Row>
                        <Col>Loan Price:</Col>
                        <Col>{price}</Col>
                    </Row>
                    
                </Card.Text>
                <Container className='text-center'>
                    <Button as={Link} to="/Book" variant="success">Loan</Button>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Choix;