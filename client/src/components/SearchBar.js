import React from 'react';


class SearchBar extends React.Component{

  handleSubmit(e) {
    console.log("click");
    e.preventDefault();
  };

  render() {
    return ( 
      <form onSubmit={this.handleSubmit}>
      <h3>I'm looking for:</h3>
      <input ref="srch" type="search" id="search" placeholder="Search..." />
      <button>Go</button>
      <hr />
      </form>  );
  };
};


export default SearchBar;