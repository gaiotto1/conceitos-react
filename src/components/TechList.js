import React, { Component } from 'react';

import TechItem from './TechItem';


class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJs',
      'React Native'
    ]
  };

  handleInputChange = e => {
    // this.props.tech acessando a propriedade tech do componente
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech]
    })
    this.state.newTech = ''
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>{this.state.newTech}</p>
          <ul>
            {this.state.techs.map(tech => (
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleDelete(tech)} // passando uma função como parâmetro
              />
            ))}
          </ul>
          
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <button type="submit">Enviar</button>
        </form>
      </>
    )
  }
}

export default TechList;