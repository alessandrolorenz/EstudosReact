import React, { Component } from 'react'

export default class Saudacao extends Component {


    constructor(props) {
        super(props)

        this.state = {
            tipo: this.props.tipo,
            nome: this.props.nome
        }

        this.setNome = this.setNome.bind(this)

    }

    setTipo(e) {
        // this.props.tipo = e.target.value
        this.setState({ tipo: e.target.value })
    }

    setNome(e){
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div className="container text-center" >
                <h1>{tipo}  {nome} </h1>
                
                <input className="text-secondary" type="text" placeholder="Tipo..."
                    value={tipo} onChange={e => this.setTipo(e)} />
                <input className="text-secondary" type="text" placeholder="Mome..."
                    value={nome} onChange={this.setNome} />
                <br />
                <br />
                <hr />
            </div>



        )
    }

}