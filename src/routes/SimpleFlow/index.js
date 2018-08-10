import React from 'react';
import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  DiagramWidget,
} from 'storm-react-diagrams';

export default () => {
  //1) setup the diagram engine
  const engine = new DiagramEngine();
  engine.installDefaultFactories();

  //2) setup the diagram model
  const model = new DiagramModel();

  //3-A) create a default node
  const node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)');
  const port1 = node1.addOutPort('Out');
  node1.setPosition(100, 100);

  //3-B) create another default node
  const node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
  const port2 = node2.addInPort('In');
  node2.setPosition(400, 100);

  //3-C) link the 2 nodes together
  const link1 = port1.link(port2);

  //3-D) create an orphaned node
  const node3 = new DefaultNodeModel('Node 3', 'rgb(0,192,255)');
  node3.addOutPort('Out');
  node3.setPosition(100, 200);

  //4) add the models to the root graph
  model.addAll(node1, node2, node3, link1);

  //5) load model into engine
  engine.setDiagramModel(model);

  //6) render the diagram!
  return <DiagramWidget diagramEngine={engine} allowLooseLinks={false} />;
};
