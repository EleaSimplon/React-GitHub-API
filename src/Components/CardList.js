import React, { Component, useEffect, useState } from 'react';
import '../index.css';
import { Button, Card, ListGroup } from 'react-bootstrap';

function CardList () {

    const [testEvents, setTestEvents] = useState([]);

    // useEffect( () => {

    //     fetch ("https://api.github.com/events")
    
    //     .then(res => res.json())
    //       .then(data => {
    //         return setTestEvents(data)
    //       });
    //     },
    //     []
    // );

    return (
        
        Object.keys(testEvents).map((testEvent) => {
            return (

                <div className="d-flex justify-content-center" key={testEvents[testEvent].id}>

                    <Card className="text-center">
                    <Card.Img variant="top" src={testEvents[testEvent].actor.avatar_url} />
                        <Card.Header>{testEvents[testEvent].actor.login}</Card.Header>
                        <Card.Body>
                            <Card.Title>{testEvents[testEvent].type}</Card.Title>
                            <Card.Text>
                            {testEvents[testEvent].repo.name}
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        <Card.Footer className="text-muted">{testEvents[testEvent].created_at}</Card.Footer>
                    </Card>

                </div>
            )
        })
    )
    
}

export default CardList;