import React from 'react'; 

var count = 0

class MyButton extends React.Component {

    constructor(props) {
        super(props);
        count = count + 1

     }
    handleClick(props) {
      alert('Hey !!! You Clicked :' + this.props.Text, this);
    }
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
        <button onClick={() => this.handleClick()} >
          Click me {count}
        </button>
      );
    }
  }
export {MyButton};