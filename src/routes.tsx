import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Admin from './pages/Admin';
import Nav from './components/nav/index';


const Routes = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Route component={Home} exact path="/" />
            <Route component={ Admin } path="/admin"  />

        </BrowserRouter>
    )
}

export default Routes;
