import React, { Component } from 'react';
import './assets/estilo.css';
import biscoito from './assets/biscoito.png';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoFrase: '',
            numero: null,
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);
        this.numeroAleatorio = this.numeroAleatorio.bind(this);

        this.frases = [
            'Siga os bons e aprenda com eles.',
            'O bom-senso vale mais do que muito conhecimento.',
            'O riso é a menor distância entre duas pessoas.',
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.',
        ];
    }

    quebraBiscoito() {
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
        this.setState(state);
    }

    numeroAleatorio() {
        const novoNumero = Math.floor(Math.random() * 100) + 1;
        this.setState({ numero: novoNumero });
    }

    render() {
        return (
            <div className="container">
                <img src={biscoito} className="img" alt="Biscoito" />
                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
                <Botao nome="Gerar Número" acaoBtn={this.numeroAleatorio} />
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
                {this.state.numero !== null && <h3>Número Aleatório: {this.state.numero}</h3>}
            </div>
        );
    }
}

class Botao extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        );
    }
}

export default App;
