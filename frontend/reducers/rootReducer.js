
import { combineReducers } from 'redux';
import AnswerReducer from './AnswerReducer';
import QuestionReducer from './QuestionReducer';
import StudentReducer from './StudentReducer';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  answer: AnswerReducer,
  question: QuestionReducer,
  student: StudentReducer,
  form: formReducer
});

export default rootReducer;
