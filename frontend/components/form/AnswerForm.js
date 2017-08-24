import { Field, reduxForm, reset } from 'redux-form';
import React from 'react';
import { Button } from 'react-materialize';


let AnswerForm = props => {

  const { handleSubmit, dispatch } = props

  if(props.submitSucceeded){
    dispatch(reset('Answer'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="AddFlex">
        <Field id="answerInput" name="answer" component="input" type="text" />
        <Button id="answerButton" type="submit">+</Button>
      </div>
    </form>
  )
}

AnswerForm = reduxForm({
  // a unique name for the form
  form: 'Answer'
})(AnswerForm)

export default AnswerForm;
