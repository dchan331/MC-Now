
import { combineReducers } from 'redux';
import AnswerReducer from './AnswerReducer';
import QuestionReducer from './QuestionReducer';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  answer: AnswerReducer,
  question: QuestionReducer,
  form: formReducer
});

export default rootReducer;
