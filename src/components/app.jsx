import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div>
        {!this.state.show ? (
          <h1>hello there!</h1>
        ) : (
          <h1>nothing to see here!</h1>
        )}
      </div>
    );
  }
}

export default App;
