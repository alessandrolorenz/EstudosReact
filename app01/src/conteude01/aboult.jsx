import React, { Component } from 'react'

export default class About extends Component {
    render(){
        return (

            
  <section className="page-section bg-primary text-white mb-0" id="about">
    <div className="container">

     
      <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

   
      <div className="divider-custom divider-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fa fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>


      <div className="row">
        <div className="col-lg-4 ml-auto">
          <p className="lead">Está é uma pagina criada para solidificar alguns conhecimentos aprendidos no curso de React da Cod3r. Consiste em passar para o React um template do boostrap.</p>
        </div>
        <div className="col-lg-4 mr-auto">
          <p className="lead">Primeiramente apens coloquei o template nos React, componetizando algumas partes dele. Depois fiz alguns dos exercícios propostos e coloquei na pagina para testar, ver como colocar na pagina e tentar fazer tudo funcionar.</p>
        </div>
      </div>


      <div className="text-center mt-4">
        <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/themes/freelancer/">
          <i className="fa fa-download mr-2"></i>
          Free Download deste template!
        </a>
      </div>

    </div>
    <br />
  </section>



        )
    }

} 