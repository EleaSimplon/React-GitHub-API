import '../App.css';
import NavBar from './navbar';
import FormSearch from './Form';
import CardUser from './Card';
import CardList from './CardList';
import React, { useState, useEffect } from 'react';
import FooterImg from './footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [login, setLogin] = useState('');
  const [followers, setFollowers] = useState('');
  const [public_repos, setPublicRepos] = useState('');
  const [avatar_url, setAvatar] = useState('');
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState('');

  const setData = (data) => {
    setLogin(data.login)
    setAvatar(data.avatar_url)
    setFollowers(data.followers)
    setPublicRepos(data.public_repos)
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch (`https://api.github.com/users/${userInput}`)

    .then(res => res.json())
    .then(data => {
      // IF SUBMIT AN INVALID USER NAME 
      if (data.message) {
        setError(data.message)
      }
      else {
        setData(data);
      }
      setData(data);
    })
  }

  return (

    <Router>
      <div>
        <NavBar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Card">
           <FormSearch search={handleSearch} submit={handleSubmit}/>
           <CardUser login = {login} avatar = {avatar_url} followers = {followers} nbRepos = {public_repos} userInput={userInput}/>
          </Route>
          <Route path="/CardList">
            <CardList />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );

}

export default App;
