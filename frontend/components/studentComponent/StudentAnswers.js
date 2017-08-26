import React from 'react';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';
const url = 'http://localhost:3000';
import axios from 'axios';
import StudentRender from './StudentRender';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { studentQ, studentAns } from '../../actions/index';

class StudentAnswer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      studentQ: {}
    }
  }
  componentDidMount(){
    this.props.addStudentQ(this.props.id, this.props.answers);
    this.setState({studentQ: this.props.studentQ})
  }

  render(){

    return(
      <div className="SAFlex" style={{flexDirection: 'column', margin: '0 auto'}}>
        <StudentRender answers={this.props.answers} id={this.props.id} qid={this.props.qid} studentQ={this.state.studentQ}/>
      </div>
    )
  }
}

StudentAnswer.propTypes = {
  studentQ: PropTypes.object,
  addStudentQ: PropTypes.func,
};

const mapStateToProps = (state) => {
  return{
    studentQ: state.student
  }
};

const mapDispatchToProps = (dispatch) => ({
  addStudentQ: (id, answer) => dispatch(studentQ(id, answer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentAnswer);
