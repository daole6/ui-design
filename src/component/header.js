import React, { Component } from 'react';
class Header extends Component {
    
    render() { 
        return (  
            <nav>
                <div className="logo">Monday.</div>
                <ul>
                    <li>Home</li>
                    <li>Our Product</li>
                    <li>About</li>
                    <li>Contact</li>

                </ul>
                <div className="search">
                    <i className="fa fa-search"></i>
                    <i className="fa fa-shopping-basket"></i>
                </div>
            </nav>
        );
    }
}
 
export default Header;