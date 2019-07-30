import React, { Component } from 'react'

import Saudacao from '../conteude01/saudacao'
import Pai from '../conteude01/pai01'
import Pai01 from '../conteude01/pai02'
import Filho from '../conteude01/filho01'

export default class aplicacao1 extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     tipo: this.props.tipo,
  //     nome: this.props.nome
  //       }
  //   this.setTipo = this.setTipo.bind(this)
  //   this.setNome = this.setNome.bind(this)
  // }
  // setTipo(e){
  //   this.setState({ tipo: e.target.value })
  // }
  // setNome(e){
  //   this.setState({ nome: e.target.value })
  // }

  render() {
    // const { tipo, nome } = this.state
    return (
      <div>

        <section className="masthead bg-primary text-white mb-0" id="about">
          <div className="container">

            <h2 className="page-section-heading text-center text-uppercase text-white">Exercício com propriedades passadas</h2>

            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fa fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>

            <div className="row">
              <div className="col-lg-4 ml-auto">
                <p className="lead">Este é um exercicío do curso de React da Cod3r. Consiste em um input que ao ser alterado atualiza o label.</p>
              </div>
              <div className="col-lg-4 mr-auto">
                <p className="lead">Nos campos de texto ao ser escrito alguma coisa, o estado da aplicação é atualizado e a alteração é refletida na label acima dos campos.</p>
              </div>
            </div>

            {/* <div className="container text-center" >
            <h1>{ tipo }  { nome } !!</h1>
            <hr />
            <input className="text-secondary" type="text" placeholder=" Tipo.... "
            value= {tipo} onChange={this.setTipo} />
            <input className="text-secondary" type="text" placeholder=" Tipo.... "
            value= {nome} onChange={this.setNome} />
          </div> */}

            <Saudacao tipo="Campo 1" nome="Campo 2" />
          </div>
        </section>

        <Pai nome="Pedro" sobrenome="Silva" />
        <Pai01 nome="Pedro" sobrenome="Silva" >
          <Filho nome="Alemao" sobrenome="Filho" />
          <Filho nome="Alemao"  />
        </Pai01>



      </div>

    )

  }

}