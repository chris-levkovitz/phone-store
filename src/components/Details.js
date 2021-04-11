import React, { Component } from 'react'
import {ProductConsumer} from "./context";
import {Link} from 'react-router-dom';
import {ButtonContainer} from "./Button"


export default class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value) => {
                 const {id, 
                        price, 
                        img, 
                        info, 
                        title, 
                        inCart, 
                        company,
                        } = value.detailProduct
                   return (
                       <div className="container py-5">
                           <div className="row">
                               <div className="col-10 mx-auto text-slanted text-blue my-5">
                                   <h1>
                                       {title}
                                   </h1>
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitelize">
                                    <img src={img} className="img-fluid" alt="product"/>
                               </div>
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitelize">
                                   <h3>model : {title}</h3>
                                   <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                       made by : <span className="text-uppercase">{company}</span>
                                   </h4>
                                   <h4 className="text-blue">
                                       <strong>
                                           price : <span>${price}</span>
                                       </strong>
                                   </h4>
                                   <h4 className="text-capitelize font-weight-bold mt-3 mb-0">
                                    some info about product:
                                    </h4>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        
                                            <Link to="/">
                                                <ButtonContainer>
                                                    back to products
                                                </ButtonContainer>
                                            </Link>
                                       
                                        
                                              <ButtonContainer cart
                                                  disabled={inCart?true:false}
                                                      onClick={() =>{
                                                          value.addToCart(id);
                                                          value.openModal(id);
                                                      }}>
                                                {inCart ? 'inCart' : 'add to cart'}
                                            </ButtonContainer>
                                        
                                    </div>
                                    </div>
                              </div>
                          </div>
                   )
               }}
           </ProductConsumer>
        )
    }
}
