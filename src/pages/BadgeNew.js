import React from 'react';


import '../pages/styles/BadgeNew.css'
import Medalla from '../components/Badge'
import header from '../images/badge-header.svg'
import MedallaFormulario from '../components/MedallaFormu'

class NuevoBroche extends React.Component{
    state = { form: {
        nombrc:'a',
        apel:'',
    } };
    

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form, 
                [e.target.name]:e.target.value,
            } 
            
        })
    };
    render(){
        return (
            <React.Fragment>
               
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Medalla imagen="https://www.gravatar.com/avatar?d=identicon" nombre={this.state.form.nombrc} apellido = {this.state.form.apel} trabajo="productor textil" twitter="paquilord"/>

                        </div>
                        <div className="col-6">
                            <MedallaFormulario onChange={this.handleChange} ValoresForm = {this.state.form} />
                        </div>
                    </div>
                
                </div>
            </React.Fragment>
            
        );

    }
}

export default NuevoBroche