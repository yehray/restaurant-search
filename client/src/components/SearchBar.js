import React from 'react';


class SearchBar extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      searchTerm: '',
      locationTerm: ''
    }
   this.componentDidMount = this.componentDidMount.bind(this);
   this.handleSearchChange = this.handleSearchChange.bind(this);
   this.handleLocationChange = this.handleLocationChange.bind(this);
  //  this.callApi = this.callApi.bind(this);
  }

  componentDidMount() {
    console.log(this.state.searchTerm);
    console.log(this.state.locationTerm);
    fetch('/api/'+ this.state.searchTerm +'/' + this.state.locationTerm)
    .then((response) => response.json())
    .then((responseJSON) => {
      this.setState({ response: responseJSON.express })
      console.log(responseJSON);
    });
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
      <button type="button" onClick={this.componentDidMount}>Go</button>
      </form>
    );
  };
};


export default SearchBar;