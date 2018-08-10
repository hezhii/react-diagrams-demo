import * as SRD from 'storm-react-diagrams';
import DiamondNodeWidget from './DiamondNodeWidget';
import DiamondNodeModel from './DiamondNodeModel';
import * as React from 'react';

export default class DiamondNodeFactory extends SRD.AbstractNodeFactory {
  constructor() {
    super('diamond');
  }

  generateReactWidget(diagramEngine, node) {
    return <DiamondNodeWidget node={node} />;
  }

  getNewInstance() {
    return new DiamondNodeModel();
  }
}
