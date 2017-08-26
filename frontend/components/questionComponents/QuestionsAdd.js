// dependencies
import React from 'react';
import axios from 'axios';
const url = 'http://localhost:3000'

//redux store
import { connect } from 'react-redux';

//materialize libraries
import { Button } from 'react-materialize';
import type { FieldProps, FormProps } from 'redux-form';

// actions
import { handleAddAns, handleAddQs, refreshAns } from '../../actions/index';

import PropTypes from 'prop-types';

//components
import QuestionList from './QuestionList';
import AnswerList from './AnswerList';
import QuestionForm from './QuestionForm';
import AnswerForm from './AnswerForm';


class QuestionsAdd extends React.Component{
  constructor(props){
    super(props);
    this.Qsubmit = this.Qsubmit.bind(this);
    this.Asubmit = this.Asubmit.bind(this)
  }

  Qsubmit(values){
    if(this.props.addAns.length >=2 && values.question){
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
    }else{
      alert('Missing Answer Option or Question')
    }
  }

  Asubmit(values){
    this.props.onAddAns(values.answer);
  }

  render(){
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
