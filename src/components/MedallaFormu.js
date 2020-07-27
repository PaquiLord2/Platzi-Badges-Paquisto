import React from 'react';

class MedallaFormulario extends React.Component{
    
    handleClick = e => {
        console.log("se presionó el botón");
        console.log(this.state);
    };
    handleSubmit = e => {
        e.preventDefault()
        console.log("evento fue enviado")
    }
    render(){
        return (
           <div>
               <h1>Nueva Medalla</h1>
               <form onSubmit={this.handleSubmit}>
                   <div className="form-group">
                       <label >Nombre</label>
                       <input onChange={this.props.onChange} className="form-control" type="text" name="nombrc" value={this.props.ValoresForm.nombrc}/>
                   </div>
                   <div className="form-group">
                       <label >Apellido</label>
                       <input onChange={this.props.onChange} className="form-control" type="text" name="apel" value={this.props.ValoresForm.apel}/>
                   </div>
                   <button onClick = {this.handleClick}className="btn btn-primary" >Guardar</button>

               </form>
           </div>
        );
    }
}

export default MedallaFormulario