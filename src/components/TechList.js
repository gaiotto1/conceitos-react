import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  // utilizando defaultProps dentro da classe
  // static defaultProps = {
  // }

  state = {
    newTech: '',
    techs: []
  };

  // Executado assim que o componente aparecer na tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que houver alterações nas props ou state
  componentDidUpdate(_, prevState) { // prevProps, prevState
    // this.props, this.state
    // toda a vez que o state.techs for alterado o local storage será atualizado com as novas techs
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount() {
    // limpar sujeiras que o componente deixa na aplicação quando ele for deletado
  }

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