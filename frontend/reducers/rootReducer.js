
import { combineReducers } from 'redux';
import QuestionsAddReducer from './QuestionsAddReducer';

const rootReducer = combineReducers({
  add: QuestionsAddReducer,
});

export default rootReducer;
