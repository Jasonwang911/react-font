import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import Index from '@/views/Index';
import NewsList from '@/views/NewsList';
import Mine from '@/views/Mine';
import Page404 from '@/views/Page404';

export default class Routers extends Component {
    render () {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/newsList" component={NewsList} />
                    <Route exact path="/mine" component={Mine} />
                    <Route component={Page404} />
                </Switch>
            </HashRouter>
        )
    }
}