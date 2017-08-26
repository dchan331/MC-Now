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

function studentAns(id, answer){
  return {
    type: 'STUDENT_ANS',
    id,
    answer
  }
}

function studentQ(id, answer){
  return {
    type: 'STUDENT_QS',
    id,
    answer
  }
}




export {handleAddAns, handleAddQs, refreshAns, studentAns, studentQ};
