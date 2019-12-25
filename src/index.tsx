import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";

const routes = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={App}>
                    <App/>
                </Route>
                <Route path="/aboutus" component={About}>
                    <About/>
                </Route>
                <Route path="/contactme" component={Contact}>
                    <Contact/>
                </Route>
                <Route component={ErrorPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
