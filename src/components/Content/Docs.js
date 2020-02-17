import React from 'react';
import Sidebar from '../Utils/Sidebar';
import { BrowserRouter as Router, Switch , Route , useRouteMatch , Redirect} from "react-router-dom";
import WhatIsReact from '../DocsComponent/WhatisReact';
import WhyReact from '../DocsComponent/WhyReact';

function Docs () {

    let {path,url} = useRouteMatch();

    const routes = [
        {
            path : `${url}/what_is_React`,
            component: <WhatIsReact/>
        },
        {
            path : `${url}/why_React`,
            component: <WhyReact/>
        },
    ]

    const routeLink = [
        {
            path : `${url}/what_is_React`,
            linkName : "What is React"
        },
        {
            path : `${url}/why_React`,
            linkName : "Why React"
        },
        {
            path : `${url}/what_is_React`,
            linkName : "What is React"
        },
        {
            path : `${url}/why_React`,
            linkName : "Why React"
        },
        {
            path : `${url}/what_is_React`,
            linkName : "What is React"
        },
        {
            path : `${url}/why_React`,
            linkName : "Why React"
        }
    ]

    return (
        <div className="simplelayout">
            <Router>
                <div className="sidebar">
                    <Sidebar routedata={routeLink}></Sidebar>
                </div>
                <div className="doccontent">
                    <Switch>
                        {
                            routes.map( (route,index)=>(
                                <Route key={index} path={route.path}>
                                    {route.component}
                                </Route>
                            ))
                        }
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default Docs;