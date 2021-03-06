import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import 'storm-react-diagrams/dist/style.min.css';

import './App.css';
import Home from './routes/Home';
import Simple from './routes/Simple';
import SimpleFlow from './routes/SimpleFlow';
import CustomNode from './routes/CustomNode';
import CustomLink from './routes/CustomLink';
import Clone from './routes/Clone';
import Grid from './routes/Grid';
import Lock from './routes/Lock';
import LimitPoints from './routes/LimitPoints';
import Listeners from './routes/Listeners';
import Performance from './routes/Performance';
import Serialize from './routes/Serialize';
import ZoomToFit from './routes/ZoomToFit';
import MutateGraph from './routes/MutateGraph';
import SmartRoute from './routes/SmartRoute';
import DragAndDrop from './routes/DragAndDrop';
import Dagre from './routes/Dagre';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/simple" component={Simple} />
          <Route path="/simple-flow" component={SimpleFlow} />
          <Route path="/custom-node" component={CustomNode} />
          <Route path="/custom-link" component={CustomLink} />
          <Route path="/clone" component={Clone} />
          <Route path="/grid" component={Grid} />
          <Route path="/lock" component={Lock} />
          <Route path="/limit-points" component={LimitPoints} />
          <Route path="/listeners" component={Listeners} />
          <Route path="/performance" component={Performance} />
          <Route path="/serialize" component={Serialize} />
          <Route path="/zoom-to-fit" component={ZoomToFit} />
          <Route path="/mutate-graph" component={MutateGraph} />
          <Route path="/smart-route" component={SmartRoute} />
          <Route path="/drag-and-drop" component={DragAndDrop} />
          <Route path="/dagre" component={Dagre} />
        </Switch>
      </Router>
    );
  }
}

export default App;
