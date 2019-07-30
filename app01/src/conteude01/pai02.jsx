import React from 'react'
import Filho from './filho01'

function childrenWithProps(props) {
  return  React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      ...props, ...child.props
    })
  })
}



export default props => (

  <header className="masthead bg-warning text-white text-center">

<h3 className="mb-0 text-center"> Outra Forama de fazer </h3>
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
       {/* se fosse contexto de classe, seria this.props.children */}
       {
        //  React.Children.map(props.children, child => {
        //    return React.cloneElement(child, {
        //      ...props, ...child.props
        //    })
        //  })
        childrenWithProps(props)
       } 

      </div>

    </div>
  </header>


)