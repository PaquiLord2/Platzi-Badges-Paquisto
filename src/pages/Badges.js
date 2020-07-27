import React from 'react';

import '../pages/styles/Badges.css'
import ConfLogo from '../images/badge-header.svg'
import {Link} from 'react-router-dom';
import ListaBroches from '../components/BrochesLista'

import api from '../api'

class Broches extends React.Component{
    
    state = {
        loading:true,
        error:null,
        data:undefined,
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async() => {
        this.setState({
            loading: true,
            error:null,
        })
        try{
            const data = await api.badges.list();
            this.setState({
                loading:false,
                data:data
            });

        } catch(error){
            this.setState({
                loading:false,
                error:error,
            })

        }
    }

    render(){
        if (this.state.loading === true){
            return 'Cargando...'

        }
        return (
            <React.Fragment>
                
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container"> 
                        <img className="Badges_conf-logo" src={ConfLogo} alt="Conf Logo"/>
                        </div>
                    </div>

                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/broches/new" className="btn btn-primary">Nuevo Broche</Link>
                    </div>
                     <div className="Badges_list">
                         <div className="Badges__container">
                             <ListaBroches broches={this.state.data}/>
                             
                         </div>
                     </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Broches