import React from 'react';
import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  DiagramWidget,
} from 'storm-react-diagrams';
import WorkspaceWidget from '../../component/WorkspaceWidget';

/**
 *
 * Simple stress test of the system plus zoom to fit function
 *
 */
export default () => {
  //1) setup the diagram engine
  const engine = new DiagramEngine();
  engine.installDefaultFactories();

  //2) setup the diagram model
  const model = new DiagramModel();

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      generateNodes(model, i * 200, j * 100);
    }
  }

  //5) load model into engine
  engine.setDiagramModel(model);

  //6) render the diagram!
  return (
    <WorkspaceWidget buttons={<button onClick={() => engine.zoomToFit()}>Zoom to fit</button>}>
      <DiagramWidget diagramEngine={engine} />
    </WorkspaceWidget>
  );
};

function generateNodes(model, offsetX, offsetY) {
  //3-A) create a default node
  const node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)');
  const port1 = node1.addOutPort('Out');
  node1.setPosition(100 + offsetX, 100 + offsetY);

  //3-B) create another default node
  const node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
  const port2 = node2.addInPort('In');
  node2.setPosition(200 + offsetX, 100 + offsetY);

  //3-C) link the 2 nodes together
  const link1 = port1.link(port2);

  //4) add the models to the root graph
  model.addAll(node1, node2, link1);
}
