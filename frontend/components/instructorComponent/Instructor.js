import React from 'react';
import { Button, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';

class Instructor extends React.Component{
  render(){
    return(
      <div className="AddFlex">
        <Link to='/instructor/question'><Button>Add Questions for the day</Button></Link>
        <Link to='/instructor/result'><Button>Check Results</Button></Link>
      </div>
    )
  }
}

export default Instructor
