const AnswerReducer = (state = [], action) => {
    // console.log('state in Ans reducer', state);
    // console.log('action', action);
    switch (action.type) {
        case 'NEW_ANS': {
          console.log('in here');
          console.log('action' ,action);
          const newEntry = state
          const newState = newEntry.concat([action.answer])
          console.log('NE', newState);
          return newState
        }
        case 'REFRESH': {
          return []
        }
        default:
            return state;
    }
};

export default AnswerReducer;
