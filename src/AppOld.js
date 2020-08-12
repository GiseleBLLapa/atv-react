import React, { Component } from 'react';
import Form from './Form'
import Tabela from './Tabela'

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      value: '',
      lista: []
    };
  }
  addNome = () => {
    const lista = state.lista.push(state, value);
    return

  render() {

    return (
      <div>
        <Form />
        <Tabela />
      </div>
    )
  }
}

