import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'react-materialize';
import { connect } from 'react-redux';
import axios from 'axios';
const url = 'http://localhost:3000';
import { handleAddQs, refreshAns } from '../../actions/index';

class QuestionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
  }

  Qsubmit(values){
    if(this.props.addAns.length >=2 && values){
      axios.post(url+'/api/addQuestion',{
        "question": values,
        "answer": this.props.addAns,
      })
      .then(resp => {
        this.props.onAddQs(this.state.input,this.props.addAns);
        this.setState({input: ''})
        this.props.onRefresh()
      })
      .catch(err => {
        console.log('error', err);
      })
    }else if(this.state.input === ''){
      alert('Please add a question before submitting!')
    }else if(this.props.addAns.length < 2){
      alert('Please have at least 2 answers')
    }
  }

handleInput(e){
  this.setState({input: e.target.value})
}

render(){
    return (
        <div className="AddFlex">
          <Input id="questionInput" name="question" value={this.state.input} type="text" onChange={(e) => this.handleInput(e)}/>
          <Button id="questionButton" onClick={() => this.Qsubmit(this.state.input)}>Add Question</Button>
        </div>
    )
  }
}


QuestionForm.propTypes = {
  addAns: PropTypes.array,
  onAddQs: PropTypes.func,
  onRefresh: PropTypes.func
}

const mapStateToProps = (state) => {
  return{
    addAns: state.answer,
  }
};

const mapDispatchToProps = (dispatch) => ({
  onAddQs: (question, answer) => dispatch(handleAddQs(question, answer)),
  onRefresh: () => dispatch(refreshAns())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
