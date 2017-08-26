import React from 'react';

class QuestionList extends React.Component{

  render() {
    const array = [];
    for(var key in this.props.addQs){
      array.push(this.props.addQs[key]);
    }
    return (
      <div className="List">
        {array.map((question,i) => {
          const index = i+1
          return(<div key={i} className="questionItem">{index + ') ' + question.Question}</div>)
        })
      }
      </div>
    )
  }
}

export default QuestionList;
