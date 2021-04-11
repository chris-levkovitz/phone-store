import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from "../logo.svg"
import styled from 'styled-components'
import {ButtonContainer} from "./Button"



export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper>
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
               {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk  */}
                    <Link to="/" >
                        <img src={logo} alt="store" className="navbar-brand"/>
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                product
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span style={{fontFamily: "'Bangers', cursive"}}>
                                <i style={{marginRight: '10px'}} className="fas fa-cart-plus"></i>my cart
                            </span>
                        </ButtonContainer>
                    </Link>       
            </nav>
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.nav`
background: blue;
.nav-link{
    color: var(--mainWhite)!important;
    font-size: 1.8rem;

}

`