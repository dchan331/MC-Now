import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render(){
    return(
      <div id="header">
        <Link to="/">
          <img
            id="logo"
            src='https://cdn-images-1.medium.com/max/1600/1*en8kyTPTMeGKjTyr8HyiZQ.png'
          />
        </Link>
      </div>
    )
  }
}

export default Header
