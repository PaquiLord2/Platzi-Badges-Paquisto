import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NuevoBroche from '../pages/BadgeNew';
import Broches from '../pages/Badges';
import Layout from './Layout';
import Error404 from '../pages/Error.js'
function App(){
    return (
        
        <BrowserRouter>
        <Layout>
        <Switch>
            <Route exact path="/broches" component={Broches}/>
            <Route exact path="/broches/new" component={NuevoBroche}/>
            <Route component={Error404}/>
            </Switch>
            </Layout> 
        </BrowserRouter>
    )
}

export default App