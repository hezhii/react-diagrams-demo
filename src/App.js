import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'storm-react-diagrams/dist/style.min.css';

import './App.css';
import Home from './routes/Home';
import Simple from './routes/Simple';
import SimpleFlow from './routes/SimpleFlow';
import CustomNode from './routes/CustomNode';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/simple" component={Simple} />
          <Route path="/simple-flow" component={SimpleFlow} />
          <Route path="/custom-node" component={CustomNode} />
        </Switch>
      </Router>
    );
  }
}

export default App;
