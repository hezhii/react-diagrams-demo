import React from 'react';
import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  DiagramWidget,
} from 'storm-react-diagrams';

/**
 * Shows some of the events triggered when elements are selected
 */
export default () => {
  // setup the diagram engine
  const engine = new DiagramEngine();
  engine.installDefaultFactories();

  const model = new DiagramModel();

  // sample for link with simple line
  const node1 = new DefaultNodeModel('Node 1', 'rgb(255,99,66)');
  const port1 = node1.addOutPort('Out');
  node1.setPosition(100, 100);

  const node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
  const port2 = node2.addInPort('In');
  node2.setPosition(400, 40);

  const node3 = new DefaultNodeModel('Node 3', 'rgb(128,99,255)');
  const port3 = node3.addInPort('In');
  node3.setPosition(300, 160);

  //link the nodes
  let link1 = port1.link(port2);
  let link2 = port1.link(port3);

  // add all the models
  let models = model.addAll(node1, node2, node3, link1, link2);

  // add a selection listener to each
  models.forEach(item => {
    item.addListener({
      selectionChanged: (e) => console.log('selectionChanged', e),
    });
  });

  engine.setDiagramModel(model);

  const props = {
    diagramEngine: engine,
    maxNumberPointsPerLink: 0, // no extra points so link selection is fired straight away
  };

  return (
    <div style={{ height: '100%' }}>
      <p>Click the diagram elements to inspect some of the possible events.</p>
      <DiagramWidget {...props} />
    </div>
  );
};
