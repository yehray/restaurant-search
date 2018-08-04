import React from 'react';
import Tile from './Tile';


class SearchBar extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      searchTerm: '',
      locationTerm: ''
    }
   this.handleSearch = this.handleSearch.bind(this);
   this.handleSearchChange = this.handleSearchChange.bind(this);
   this.handleLocationChange = this.handleLocationChange.bind(this);
  //  this.callApi = this.callApi.bind(this);
  }

  handleSearch(e){
    var self = this;
    const restaurants = this.state.restaurants;
    console.log(this.state.searchTerm);
    console.log(this.state.locationTerm);
    fetch('/api/'+ this.state.searchTerm +'/' + this.state.locationTerm)
    .then((response) => response.json())
    .then((responseJSON) => {
      responseJSON.express.map(function(object){
        restaurants.push(object);
        console.log(object.name);
      })
      self.setState({restaurants});
    })
    
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // }

  handleSearchChange(e){
    this.setState({searchTerm: e.target.value});
  }
  handleLocationChange(e){
    this.setState({locationTerm: e.target.value});
  }

  render() {
    return ( 
      <form>
      <h3>I'm looking for:</h3>
      {this.state.response}
      <label>Search: 
      <input type="text" name="search" placeholder="Search..." value={this.state.searchTerm} onChange={this.handleSearchChange} />
      </label>
      <label>Location: 
      <input type="text" name="location" placeholder="Location..." value={this.state.locationTerm} onChange={this.handleLocationChange}/>
      </label>
      <button type="button" onClick={this.handleSearch}>Go</button>
      {this.state.restaurants.map(restaurant => <li> <Tile restaurantName = {restaurant.name} restaurantURL= {restaurant.url}  imageURL= {restaurant.image_url}/> </li>)}
      </form>
    );
  };
};


export default SearchBar;