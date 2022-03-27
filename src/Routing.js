import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Posts from './components/posts/Posts';
import history from './history';

export default class Routing extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </Router>
        )
    }
}