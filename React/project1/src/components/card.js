import React from 'react';
import mujer from '../assets/mujer.jpg';


function Card (){
    return(
        <div className='container' >
        <div className='row'>
            <div className='row col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
             <div className="card col-4 m-5 d-block">
                 <div className='title '>
                     <picture className='img-top'>
                        <img src={mujer} className='img-top'/>
                     </picture> 
                     <h4 className='text-center mt-2'>Laura Smith</h4>
                     <p className='text-center'> Frontend Developer</p>
                </div>  
                <div className="card-body">
                        <a href="www.linkedin.com" className="btn btn-secondary d-inline my-5 mx-4"><i className="bi bi-envelope-fill"></i> Email</a>
                        <a href="#" className="btn btn-primary d-inline my-5 mx-4"><i className="bi bi-linkedin"></i> Linkeind</a>
                        <div className='mt-4'>
                        <section>     
                        <h4>about</h4>
                        <p>este contenido es para demostrar la parte de about utilizado para revisar la postura del componente</p>
                        </section>     
                        <section>
                        <h4>Interest</h4>   
                        <p>este contenido es para demostrar la parte de interest utilizado para detectar cambios en el html</p>
                        </section>     
                        </div>
                </div>

                
                <div className='footer'>
                     <nav className='row'>
                         <ul className='col-12 mt-3'>
                          <li className='d-inline ml-2'><i className="bi bi-twitter"></i></li>
                          <li className='d-inline'><i className="bi bi-facebook"></i></li>
                          <li className='d-inline'><i className="bi bi-github"></i></li>
                          <li className='d-inline mr-2'><i className="bi bi-slack"></i></li>
                         </ul>
                     </nav>
                </div>
            </div>
        </div>
     </div>
   </div>
    )
}

export default Card;