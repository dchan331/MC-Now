

const QuestionsAddReducer = (state = [], action) => {
    console.log('state in QA reducer', state);
    console.log('action', action);
    switch (action.type) {
        case 'NEW_ENTRY': {
          const newEntry = {};
          newEntry[action.tag] = action.answer
          const newState = state.concat([newEntry])
          console.log('NS', newState);
          return newState
        }
        default:
            return state;
    }
};

export default QuestionsAddReducer;
