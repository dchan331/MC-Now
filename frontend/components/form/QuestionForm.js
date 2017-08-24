import { Field, reduxForm, reset } from 'redux-form';
import React from 'react';
import { Button } from 'react-materialize';


let QuestionForm = props => {
  console.log(props);


  const { handleSubmit, dispatch } = props

  if(props.submitSucceeded){
    dispatch(reset('Question'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="AddFlex">
        <Field id="questionInput" name="question" component="input" type="text" />
        <Button id="questionButton" type="submit">Add Question</Button>
      </div>
    </form>
  )
}


QuestionForm = reduxForm({
  // a unique name for the form
  form: 'Question'
})(QuestionForm)

export default QuestionForm;
