import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import Tile from './components/Tile';
import LoginPage from './components/auth/LoginPage';


import Navigation from './components/shared/Navigation';
import HomePage from './components/home/HomePage';
import RegistrationForm from './components/auth/RegistrationForm';
import config from './app.config';
import LoginPage from './components/auth/LoginPage';
import ProfilePage from './components/auth/ProfilePage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Welcome",
    };
  }

  render() {
    return (
      // <div className="App">
      //   <Header title={this.state.title}/>
      //   <NavBar/>
      //   <SearchBar/>
      //   <Footer title={this.state.title}/>
      // </div>
      <div className="App">
      <Navigation />
      <main>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />
        <Route path="/implicit/callback" component={ImplicitCallback} />
        <Route path="/register" component={RegistrationForm} />
        <SecureRoute path="/profile" component={ProfilePage} />
      </main>
    </div>
    );
  }
}

export default App;



