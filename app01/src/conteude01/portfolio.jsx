import React, { Component } from 'react'
import fofo01 from '../../img/portfolio/cabin.png' 
import fofo02 from '../../img/portfolio/cake.png'
import fofo03 from '../../img/portfolio/circus.png'
import fofo04 from '../../img/portfolio/game.png'  
import fofo05 from '../../img/portfolio/safe.png'
import fofo06 from '../../img/portfolio/submarine.png'       

export default class Portfolio extends Component {
    render() {
        return (
            
            <section className="page-section portfolio" id="portfolio">
              <div className="container">
          
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fa fa-telegram fa-5x"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
          

                <div className="row">
          
                  
                  
                  <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                      <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img className="img-fluid" src={fofo01} alt=""/>
                    </div>
                  </div>
          
                  
                  

                  <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                      <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img className="img-fluid" src={fofo02} alt=""/>
                    </div>
                  </div>
          
                  
                  

                  <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                      <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img className="img-fluid" src={fofo03} alt=""/>
                    </div>
                  </div>
          
                 
                 

                  <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                      <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img className="img-fluid" src={fofo04} alt=""/>
                    </div>
                  </div>
          
                 
                 

                  <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                      <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img className="img-fluid" src={fofo05} alt=""/>
                    </div>
                  </div>
          
                  
                  

                  <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                      <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img className="img-fluid" src={fofo06} alt=""/>
                    </div>
                  </div>
          
                </div>
              
              

          
              </div>
            </section>




             )
    }
}