import React from 'react';
import logo from '../../src/img/east-west-university-ewu-logo-C27BC3985E-seeklogo.com.png';
import '../../src/Header/Header.css';


const Header = () => {
    return (
        <div className="header">
            <div className="logoo">
            <img src={logo} alt=""/>
            </div>
            <div className="name">
            <h3>EAST WEST UNIVERSITY</h3>
            </div>
            
        <div className="navv">
        <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/practices">Practices</a>
        <a href="/lawyers">Our Lawyers</a>
        <a href="/new">News</a>
        <a href="/contact">contact</a>
        </nav>
        </div>
        </div> 
        
        
        
    );
};

export default Header;