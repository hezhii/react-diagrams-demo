import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  LinkModel,
  NodeModel,
  DiagramWidget,
  BaseModel,
} from 'storm-react-diagrams';
import * as _ from 'lodash';
import * as React from 'react';

import WorkspaceWidget from '../../component/WorkspaceWidget';

/**
 * Tests cloning
 */
class CloneSelected extends React.Component {
  constructor(props) {
    super(props);
    this.cloneSelected = this.cloneSelected.bind(this);
  }

  cloneSelected() {
    const { engine } = this.props;
    const offset = { x: 100, y: 100 };
    const model = engine.getDiagramModel();

    const itemMap = {};
    _.forEach(model.getSelectedItems(), (item) => {
      const newItem = item.clone(itemMap);

      // offset the nodes slightly
      if (newItem instanceof NodeModel) {
        newItem.setPosition(newItem.x + offset.x, newItem.y + offset.y);
        model.addNode(newItem);
      } else if (newItem instanceof LinkModel) {
        // offset the link points
        newItem.getPoints()
          .forEach(p => {
            p.updateLocation({ x: p.getX() + offset.x, y: p.getY() + offset.y });
          });
        model.addLink(newItem);
      }
      newItem.selected = false;
    });

    this.forceUpdate();
  }

  render() {
    const { engine } = this.props;
    return (
      <WorkspaceWidget buttons={<button onClick={this.cloneSelected}>Clone Selected</button>}>
        <DiagramWidget className="srd-demo-canvas" diagramEngine={engine} />
      </WorkspaceWidget>
    );
  }
}

export default () => {
  //1) setup the diagram engine
  const engine = new DiagramEngine();
  engine.installDefaultFactories();

  //2) setup the diagram model
  const model = new DiagramModel();

  //3-A) create a default node
  const node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)');
  const port = node1.addOutPort('Out');
  node1.setPosition(100, 100);

  //3-B) create another default node
  const node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
  const port2 = node2.addInPort('In');
  node2.setPosition(400, 100);

  // link the ports
  const link1 = port.link(port2);

  //4) add the models to the root graph
  model.addAll(node1, node2, link1);

  //5) load model into engine
  engine.setDiagramModel(model);

  //6) render the diagram!
  return <CloneSelected engine={engine} model={model} />;
};
