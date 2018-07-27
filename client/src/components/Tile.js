import React from 'react';

const tileStyle =  {
  // border-radius: '15px 50px 30px 5px',
  background: '#73AD21',
  padding: '20px', 
  width: '200px',
  height: '150px' 
}



class Tile extends React.Component{
  constructor() {
    super();
  }
  

  render() {
    return ( 
      <div className="Tile" style={tileStyle}>
      {this.props.restaurantName} 
      <a href={this.props.restaurantURL}> LINK </a> 
      <img src= {this.props.imageURL} style={tileStyle}></img>
      </div>
  )
  }
}

export default Tile;