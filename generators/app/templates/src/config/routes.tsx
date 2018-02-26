import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { registerRoutes } from "./bootstrap";
import {RouteCombiner} from 'utils/router/route.combiner';

registerRoutes();

const RouteWithSubRoutes  = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )}/>
);

const routes = <Router>
        <Switch>
            {RouteCombiner.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
    </Router>;


export default routes;