import React from 'react';


class SearchBar extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    }
   this.componentDidMount = this.componentDidMount.bind(this);
   this.callApi = this.callApi.bind(this);
  }

  // handleSubmit(e) {
  //   console.log("click");
  //   e.preventDefault();
  // };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return ( 
      <form onSubmit={this.componentDidMount}>
      <h3>I'm looking for:</h3>
      <input ref="srch" type="search" id="search" placeholder="Search..." />
      <button>Go</button>
      {this.state.response}
      <hr />
      </form>  );
  };
};


export default SearchBar;