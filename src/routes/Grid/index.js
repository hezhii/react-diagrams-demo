import React from 'react';
import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  DiagramWidget,
} from 'storm-react-diagrams';

/**
 * Tests the grid size
 */
export default () => {
  //1) setup the diagram engine
  const engine = new DiagramEngine();
  engine.installDefaultFactories();

  //2) setup the diagram model
  const model = new DiagramModel();
  model.setGridSize(50);

  //3-A) create a default node
  const node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)');
  let port = node1.addOutPort('Out');
  node1.setPosition(100, 100);

  //3-B) create another default node
  const node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
  let port2 = node2.addInPort('In');
  node2.setPosition(400, 100);

  // link the ports
  let link1 = port.link(port2);

  //4) add the models to the root graph
  model.addAll(node1, node2, link1);

  //5) load model into engine
  engine.setDiagramModel(model);

  //6) render the diagram!
  return <DiagramWidget className="srd-demo-canvas" diagramEngine={engine} />;
};
