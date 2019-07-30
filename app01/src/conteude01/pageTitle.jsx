import React, { Component } from 'react'
import fofo01 from '../../img/avataaars.svg'  


export default class Conteudo01 extends Component {
    render() {
        return (

            <header className="masthead bg-primary text-white text-center" >
                <div className="container d-flex align-items-center flex-column">
                    <img className="masthead-avatar mb-5" src={fofo01} alt="" />
                    <h1 className="masthead-heading text-uppercase mb-0">Exercícios React & Bootstrap</h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p className="masthead-subheading font-weight-light mb-0">Front End - Web Designer - Motiongraphics</p>

                </div>
            </header>

        )
    }
}