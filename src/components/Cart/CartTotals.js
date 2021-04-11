import React from 'react'
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt ml-sm-5 ml-sm-5 ml-md-auto col-sm-8 text-capitelize text-right">
                        <Link to="/">
                            <button type="button" onClick={() => clearCart()} className="btn btn-outline-danger text-uppercase.mb-3 px-5">
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal :
                            </span>
                            <span> $ {cartSubtotal}</span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax :
                            </span>
                            <span> $ {cartTax}</span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total :
                            </span>
                            <span> $ {cartTotal}</span>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
