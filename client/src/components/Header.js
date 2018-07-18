import React from 'react';

class Header extends React.Component{
  render() {
    return ( 
      <div className="Header">Header
      {this.props.title} 
      </div>
  )
  }
}

export default Header;
