const QuestionReducer = (state = {}, action) => {
    // console.log('action', action);
    switch (action.type) {
        case 'NEW_QS': {
          const length = Object.keys(state).length
          const newEntry = {};
          newEntry[length + 1] = {
            Question: action.question,
            Answer: action.answer
          }
          console.log('in QR', newEntry);
          const newState = Object.assign({},state,newEntry)
          return newState
        }
        default:
            return state;
    }
};

export default QuestionReducer;
