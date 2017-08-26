import React from 'react';
import { Button, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';

class User extends React.Component{
  render(){
    return(
      <div className="AddFlex">
      <Link to="/instructor">
        <Button id="button-status" style={{marginRight:"10px"}}>Instructor</Button>
      </Link>

      <Link to="/student">
        <Button id="button-status" style={{marginLeft:"10px"}}>Student</Button>
      </Link>
    </div>
    )
  }
}

export default User
