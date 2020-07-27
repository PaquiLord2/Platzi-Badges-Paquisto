import React from 'react';

class ListaBroches extends React.Component{
    render(){
        return (
            
            <ul className="list-unstyled">
            {this.props.broches.map((bros)=>{
                return(
                   <li key={bros.id}>
                       {bros.firstName} {bros.lastName}
                   </li>
                )
            })}
           

        </ul>
           
        );
    }
}

export default ListaBroches