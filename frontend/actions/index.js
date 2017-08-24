function handleAddAns(answer) {
    return {
        type: 'NEW_ANS',
        answer
    };
}

function handleAddQs(question, answer) {
    return {
        type: 'NEW_QS',
        question,
        answer
    };
}

function refreshAns(){
  return {
    type: 'REFRESH'
  }
}


export {handleAddAns, handleAddQs, refreshAns};
