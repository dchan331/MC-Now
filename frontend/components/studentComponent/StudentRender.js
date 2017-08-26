import React from 'react';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';
const url = 'http://localhost:3000';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { studentQ, studentAns } from '../../actions/index';

class StudentRender extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      answer: [],
    }
  }

  componentDidMount(){
    const array = [];
    this.props.answers.forEach(ans => {
      array.push({val: ans, chosen: false})
    })
    this.setState({answer: array})

  }
  handleClick(answer){
    this.props.addStudentAns(this.props.id, answer);
    this.setState({answer: this.props.studentQ[this.props.id].answer})
  }

  render(){
    return(
      <div>
        {this.state.answer.map((answer,i) => {
          const letter = String.fromCharCode(97 + i).toUpperCase();
          return(
            <div key={i} className={answer.chosen ? 'answerItemClicked' : 'answerItem'} onClick={() => this.handleClick(answer.val)}>
              {letter+ ') '+ answer.val}
            </div>
          )}
        )}
      </div>
    )
  }
}
//
StudentRender.propTypes = {
  studentQ: PropTypes.object,
  addStudentQ: PropTypes.func,
  addStudentAns: PropTypes.func
};

const mapStateToProps = (state) => {
  return{
    studentQ: state.student
  }
};

const mapDispatchToProps = (dispatch) => ({
  addStudentQ: (id, answer) => dispatch(studentQ(id, answer)),
  addStudentAns: (id, answer) => dispatch(studentAns(id, answer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentRender);
