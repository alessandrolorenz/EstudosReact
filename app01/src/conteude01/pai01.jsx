import React from 'react'
import Filho from './filho01'

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

export default props => (

  <header className="masthead bg-info text-white text-center">

    <div className="divider-custom divider-light text-center">
      <div className="divider-custom-line"></div>
      <div className="divider-custom-icon">
        <i className="fa fa-star"></i>
      </div>
      <div className="divider-custom-line"></div>
    </div>

    <h3 className="text-uppercase mb-0 text-center"> Familia (pais e filhos em React)</h3>
    <br />
    <div className="container d-flex align-items-center flex-column text-center">

      <h2 className="masthead-heading text-uppercase mb-10 text-center"> {props.nome}  {props.sobrenome}</h2>

      <div className="divider-custom divider-light text-center">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fa fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>

      <div className="container text-center">
        <h2>Filhos </h2>
        <Filho nome="Antonho" sobrenome={props.sobrenome} />
        <Filho {...props} />
        <Filho {...props} nome="Maria"/>

      </div>

    </div>
  </header>


)