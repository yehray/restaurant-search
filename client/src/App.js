import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import Tile from './components/Tile';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Welcome",
    };
  }

  render() {
    return (
      <div className="App">
          <Header title={this.state.title}/>
          <NavBar/>
          <SearchBar/>
          <Footer title={this.state.title}/>
      </div>
    );
  }
}

export default App;
