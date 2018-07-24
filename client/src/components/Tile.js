import React from 'react';

class Tile extends React.Component{
  constructor() {
    super();
  }

  render() {
    return ( 
      <div className="Tile">Tile
      {this.props.title} 
      </div>
  )
  }
}

export default Tile;