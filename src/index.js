import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/pages/Landing';
import Toolbar from './components/Toolbar';
import MyEditor from './components/MyEditor';
import Document from './components/pages/Document';


ReactDOM.render(
  <HashRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Document} />
        <Route exact path="/doc" compontent={Landing} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
);
