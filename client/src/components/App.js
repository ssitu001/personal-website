import React, { Component } from 'react';

import NavBar from './Navbar';
import Jumbotron from './Jumbo';

export default class App extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron />
        <div id="About" className="about"> Test </div>
      </div>
    )

  }
}