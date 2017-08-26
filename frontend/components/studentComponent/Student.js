import React from 'react';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';
const url = 'http://localhost:3000';
import axios from 'axios';
import StudentAnswers from './StudentAnswers';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { studentQ } from '../../actions/index';

class Student extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      questionDeck: [],
      submit: false
    }
  }

  componentDidMount(){
    axios.get(url+'/api/answerQuestion')
    .then(resp => {
      this.setState({questionDeck: resp.data})
    })
  }

  handleSubmit(){
    console.log('in submit');
    if(this.props.studentQ.count.length !== this.state.questionDeck.length){
      alert('You missed a question!')
    }else{
      axios.post(url+'/api/answerQuestion',this.props.studentQ)
      .then(resp => {
        this.setState({submit: true})
      })
    }
  }

  render(){
    return(
      <div className="SAFlex" style={{flexDirection: 'column'}}>
        {!this.state.submit ?
          <div>
            {this.state.questionDeck.map((question,i) => {
              const index = i + 1;
              return(
                <div key={i} className="questionItem">
                  <div className="questionTab">{index + ') ' + question.Question}</div>
                  <StudentAnswers answers={question.Answer} id={question._id} qid={i}/>
                </div>
              )
            })}
            <Button id="submitAnswers" onClick={() => this.handleSubmit()}>Submit Answers</Button>
          </div>
        :
        <div>
          Answers have been submitted! You got __ / __ correct.
        </div>
      }
      </div>
    )
  }
}

Student.propTypes = {
  studentQ: PropTypes.object,
};

const mapStateToProps = (state) => {
  return{
    studentQ: state.student
  }
};

export default connect(mapStateToProps)(Student);
