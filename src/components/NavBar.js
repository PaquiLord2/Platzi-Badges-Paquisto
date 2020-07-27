import React from 'react';

import Logo from '../images/badge-header.svg';
import '../components/styles/NavBar.css';
import {Link} from 'react-router-dom';


class NavBar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                <Link className="Navbar__brand" to="/broches">
                    <img className="Navbar__brand-logo" src={Logo} alt="logo"/>
                    <span className="font-weight-light">Platzi33</span>
                    <span className="font-weight-bold">Conf</span>
                    </Link>
                    </div>
            </div>
        );

    }
}

export default NavBar