import React, { Component } from 'react'

export default class Footer extends Component {
    render(){
        return (

    
  <footer className="navbar navbar-expand-lg bg-secondary text-center">
    <div className="container">
      <div className="row">


        <div className="col-lg-4 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4m text-white">Location</h4>
          <p className="lead mb-0 text-white">AV. MADRE BENVENUTA 1313 - Santa Mônica – Florianópolis – SC – Brasil</p>
        </div>

      
        <div className="col-lg-4 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4 text-white">Around the Web</h4>
          <a className="btn btn-outline-light btn-social mx-1" href="#">
            <i className="fa fa-fw fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline-light btn-social mx-1" href="#">
            <i className="fa fa-fw fa-twitter"></i>
          </a>
          <a className="btn btn-outline-light btn-social mx-1" href="#">
            <i className="fa fa-fw fa-linkedin"></i>
          </a>
          <a className="btn btn-outline-light btn-social mx-1" href="#">
            <i className="fa fa-fw fa-dribbble"></i>
          </a>
        </div>

       
        <div className="col-lg-4">
          <h4 className="text-uppercase mb-4 text-white" >About Freelancer</h4>
          <p className="lead mb-0 text-white">Freelance is a free to use, MIT licensed Bootstrap theme created by 
            <a href="http://startbootstrap.com"> Start Bootstrap</a>.</p>
        </div>

      </div>
    </div>
  </footer>





        )
    }
}