import React from 'react';

class AnswerList extends React.Component{
  render() {
    return (
      <div className="List">
        {this.props.addAns.map((answer,i) => {
          const letter = String.fromCharCode(97 + i)
          console.log('ans', answer);
          return <div key={i}>{letter.toUpperCase() + ') ' + answer}</div>
        })
      }
      </div>
    )
  }
}

export default AnswerList;
