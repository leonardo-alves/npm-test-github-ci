import React, { Component } from 'react'

import ExampleComponent from 'npm-test-github-ci'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
      </div>
    )
  }
}
