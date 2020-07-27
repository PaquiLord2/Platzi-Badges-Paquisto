import React from 'react';
import Logo from '../images/badge-header.svg';

import './styles/Badge.css';

class Medalla extends React.Component{
    render(){
        return(
            <div className="Badge">
                <div className="Badge__header">
                  <img src={Logo} alt="Logo"/>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.imagen} alt ="Avatar"/>
                    <h1>{this.props.nombre} <br/> {this.props.apellido}</h1>
                </div>
                <div className = "Badge__section-info">
                     <h3>{this.props.trabajo}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        );
    }

}

export default Medalla;