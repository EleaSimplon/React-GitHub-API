import React, { } from 'react';
import '../index.css';
import { Card, ListGroup } from 'react-bootstrap';

function CardUser(props){

        if (props.userInput == "") {
            return (
                <div className="d-flex justify-content-center">

                    <Card className="cardUser" style={{ width: '25rem' }}>
                        <Card.Img variant="top" src='/logo192.png' />
                        <Card.Body className="cardUser">
                            <Card.Title className="text-center">LOGIN</Card.Title>
                            <ListGroup className="text-center cardUser" variant="flush">
                                <ListGroup.Item className="cardUser"></ListGroup.Item>
                                <ListGroup.Item className="cardUser">followers</ListGroup.Item>
                                <ListGroup.Item className="cardUser">repositories</ListGroup.Item>
                                <ListGroup.Item className="cardUser"></ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
            </div>
            )
            
        }
        return (
            
        <div className="d-flex justify-content-center">
        {console.log(props)}

        <Card className="cardUser" style={{ width: '25rem' }}>
            <Card.Img variant="top" src={props.avatar} />
            <Card.Body className="cardUser">
                <Card.Title className="text-center">{props.login}</Card.Title>
                <ListGroup className="text-center cardUser" variant="flush">
                    <ListGroup.Item className="cardUser"></ListGroup.Item>
                    <ListGroup.Item className="cardUser">{props.followers} followers</ListGroup.Item>
                    <ListGroup.Item className="cardUser">{props.nbRepos} repositories</ListGroup.Item>
                    <ListGroup.Item className="cardUser"></ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    </div>
        )
            
        
        

}

export default CardUser;