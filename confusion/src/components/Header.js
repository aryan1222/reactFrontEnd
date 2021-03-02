import React, { Component } from 'react'
import {Navbar, NavbarBrand} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <header>
                <Navbar dark color='primary'>
                    <div className='container'>
          
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>

                    </div>
                </Navbar>
            </header> 
        )
    }
}

export default Header;