import React, { Component } from 'react';

export default class Tabela extends Component {


    render() {
        const teste = ["abacaxi", "maça", "laranja"]
        return (

            <div>
                <h3>Lista:</h3>
                {teste.map((teste,index) => { return <ol>{teste}</ol>})}
            </div>
        );
    }
}
