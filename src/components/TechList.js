import React, { Component } from 'react';


class TechList extends Component {
  state = {
    techs: [
      'Node.js',
      'ReactJs',
      'React Native'
    ]
  };

  render() {
    console.log(this.state)
    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJs</li>
        <li>React Native</li>
      </ul>
    )
  }
}

export default TechList;