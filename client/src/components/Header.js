import React from 'react';

class Header extends React.Component{
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return ( 
      <div className="Header">Header
      {this.props.title} 
      </div>
  )
  }
}

export default Header;
