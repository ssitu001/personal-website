import React, { Component } from 'react';

import NavBar from './Navbar';

export default class App extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        <NavBar />
        <div id="About" className="about"> Test </div>
      </div>
    )

  }
}