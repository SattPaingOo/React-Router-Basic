import React from 'react';
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Home from './Content/Home';
import About from './Content/About';
import Dashboard from './Content/Dashboard';
import Docs from './Content/Docs';

function Routes() {

    const routes = [
        {
            path : '/',
            exact : true,
            component : <Home/>
        },
        {
            path : '/about',
            component : <About/>
        },
        {
            path : '/dashboard',
            component : <Dashboard/>
        },
        {
            path : '/document',
            component : <Docs/>
        },
    ]

    return(
      <div className="content">
            <Switch>
                {
                    routes.map((route,index)=>(
                        <Route key={index} exact={route.exact} path={route.path}>
                            {route.component}
                        </Route>
                    ))
                }
            </Switch>
      </div>
    );
}

export default Routes;