import React from 'react';
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom';

import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Donations from './pages/donations';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/about" component={About}/>
                <Route path="/donations" component={Donations}/>
            </Switch>
        </BrowserRouter>
    );
}