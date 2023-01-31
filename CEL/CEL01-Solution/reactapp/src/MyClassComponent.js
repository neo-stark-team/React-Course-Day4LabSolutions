import React from 'react';


class MyClassComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { input: "" };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.setState({ input: e.target.value });
    }
  
    render() {
      return (
        <input
          type="text"
          data-testid="classInput"
          placeholder="Class Component"
          value={this.state.input}
          onChange={this.handleChange}
        />
      );
    }
  }

  export default MyClassComponent;