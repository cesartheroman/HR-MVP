import React, { Component } from 'react';
import SearchBar from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    return <SearchBar />;
  }
}

export default App;
