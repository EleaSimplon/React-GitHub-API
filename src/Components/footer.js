import React, { Component } from 'react';
import '../index.css';
import { Card } from 'react-bootstrap';


function FooterImg () {

    return (
        
        <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default FooterImg;