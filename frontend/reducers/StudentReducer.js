const StudentReducer = (state = {}, action) => {
    // console.log('SA state', state);
    // console.log('SA action', action);
    switch (action.type) {
        case 'STUDENT_ANS': {
          const newEntry = state;
          const ansArray = newEntry[action.id].answer;
          ansArray.forEach(ans => {
            if(ans.val === action.answer){
              ans.chosen = true;
            }else{
              ans.chosen = false;
            }
          })
          if(newEntry.count.indexOf(action.id) === -1){
            newEntry.count.push(action.id)
          }
          return newEntry
        }
        case 'STUDENT_QS': {
          let array = [];
          action.answer.forEach(ans => {
            array.push({
              val: ans,
              chosen: false
            })
          })
          const newEntry = state;
          if(newEntry[action.id]){
            newEntry[action.id].answer = array;
          }else{
            newEntry[action.id] = {answer: array}
          }
          newEntry.count = newEntry.count || [];
          return newEntry;
        }
        default:
            return state;
    }
};

export default StudentReducer;
