import React from 'react';

class QuestionList extends React.Component{

  render() {
    const array = [];
    console.log('props', this.props.addQs);
    for(var key in this.props.addQs){
      array.push(this.props.addQs[key]);
      console.log(array);
    }
    return (
      <div className="List">
        {array.length ? array.map((question,i) => {
          const index = i+1
          return(<div key={i} className="questionItem">{index + ') ' + question.Question}</div>)
        })
        :
        <div></div>}
      </div>
    )
  }
}

export default QuestionList;
