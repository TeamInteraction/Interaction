import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import HomepageLayout from './components/pages/HomepageLayout';
import LoginForm from './components/pages/LoginForm';

ReactDOM.render(
  <HashRouter>
    <div>
      <Switch>
        <Route exact path="/Login" component={LoginForm} />
        <Route exact path="/" component={HomepageLayout} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
);

