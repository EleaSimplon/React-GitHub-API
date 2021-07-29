import React, { Component } from 'react';
import '../index.css';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

function FormSearch (props) {

    return (
        <div>
            <h1 className="text-center">Search a GitHub profile</h1>

            <Form onSubmit={props.submit}> {/* ON APPELLE NOTRE CONST HANDLSUBMIT */}
                <InputGroup className="mx-auto" style={{ width: '500px' }}>
                    <FormControl
                        type="text"
                        placeholder="Search a GitHub profile"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={props.search}
                        value={props.userInput}
                    /> {/* ON APPELLE NOTRE CONST HANDLSearch */}
                    <Button
                        variant="outline-info"
                        id="button-addon2"
                        onClick={props.submit}>
                    Search
                    </Button>
                </InputGroup>
            </Form>
        </div>
    );
}

function requestUserRepos(username){
    
    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // GitHub endpoint, dynamically passing in specified username
    const url = `https://api.github.com/users/${username}`;
    
    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);
    
    // When request is received
    // Process it here
    xhr.onload = function() {
    
        // Parse API data into JSON
        const data = JSON.parse(this.response);
        
        // Log the response
        console.log(data);
    
    }
    
    // Send the request to the server
    xhr.send();
    
}

export default FormSearch;