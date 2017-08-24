import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Input, Button, Card, Row, Col } from 'react-materialize';
import { handleAddAns, handleAddQs, refreshAns } from '../actions/index';
import type { FieldProps, FormProps } from 'redux-form'
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';
import AnswerList from './AnswerList';
import QuestionForm from './form/QuestionForm';
import AnswerForm from './form/AnswerForm';
const url = 'http://localhost:3000'

class QuestionsAdd extends React.Component{
  constructor(props){
    super(props);
    this.Qsubmit = this.Qsubmit.bind(this);
    this.Asubmit = this.Asubmit.bind(this)
  }

  Qsubmit(values){
    console.log('values', values)
    console.log('ans', this.props.addAns);
    console.log('qs', this.props.addQs);
    axios.post(url+'/api/addQuestion',{
      "question": values.question,
      "answer": this.props.addAns,
    })
    .then(resp => {
      console.log('response', resp);
      this.props.onAddQs(values.question,this.props.addAns);
      this.props.onRefresh();
    })
    .catch(err => {
      console.log('error', err);
    })

  }

  Asubmit(values){
    console.log('values A', values.answer)
    this.props.onAddAns(values.answer);
  }

  render(){
    console.log('props', this.props.addAns.length);

    return(
      <div>
        <QuestionList addQs={this.props.addQs}/>

        <QuestionForm onSubmit={this.Qsubmit} />

        <AnswerList addAns={this.props.addAns}/>

        <AnswerForm onSubmit={this.Asubmit} />
      </div>
    )
  }
};

QuestionsAdd.propTypes = {
  tag: PropTypes.string,
  onAddAns: PropTypes.func,
  onAddQs: PropTypes.func,
  onRefresh: PropTypes.func,
  addAns: PropTypes.array,
  addQs: PropTypes.object,
  submit: PropTypes.func,
};

const mapStateToProps = (state) => {
  return{
    addAns: state.answer,
    addQs: state.question
  }
};

const mapDispatchToProps = (dispatch) => ({
  onAddAns: (tag, answer) => dispatch(handleAddAns(tag, answer)),
  onAddQs: (tag, question, answer) => dispatch(handleAddQs(tag, question, answer)),
  onRefresh: () => dispatch(refreshAns())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsAdd);
