import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router} from "react-router-dom";
import {Route, Switch} from "react-router";
import createHistory from "history/createBrowserHistory";
import ReactGA from "react-ga";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

const history = createHistory();
ReactGA.initialize("UA-166003117-1");
history.listen(location => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname)
});

const routes = (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/aboutus" component={About}/>
            <Route path="/contactme" component={Contact}/>
            <Route component={ErrorPage}/>
        </Switch>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
