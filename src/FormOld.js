import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
            <form>
                <label>Nome</label>
                <input className='nome' onChange="App.addNome" />
                <div>
                    <input type="button" value='salvar' onClick='.nome' />
                    <input type="button" value='limpar' onClick='App.delNome()' />
                </div>
            </form>
        )
    }
}
