import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  DefaultPortModel,
  DiagramWidget,
  DefaultLinkModel,
  DefaultLinkFactory,
} from 'storm-react-diagrams';
import * as React from 'react';

export class AdvancedLinkModel extends DefaultLinkModel {
  constructor() {
    super('advanced');
    this.width = 10;
  }
}

export class AdvancedPortModel extends DefaultPortModel {
  createLinkModel() {
    return new AdvancedLinkModel();
  }
}

export class AdvancedLinkSegment extends React.Component {
  constructor(props) {
    super(props);
    this.percent = 0;
  }

  componentDidMount() {
    this.mounted = true;
    this.callback = () => {
      if (!this.circle || !this.path) {
        return;
      }

      this.percent += 2;
      if (this.percent > 100) {
        this.percent = 0;
      }

      let point = this.path.getPointAtLength(this.path.getTotalLength() * (this.percent / 100.0));

      this.circle.setAttribute('cx', '' + point.x);
      this.circle.setAttribute('cy', '' + point.y);

      if (this.mounted) {
        requestAnimationFrame(this.callback);
      }
    };
    requestAnimationFrame(this.callback);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <g>
        <path
          ref={ref => {
            this.path = ref;
          }}
          strokeWidth={this.props.model.width}
          stroke="rgba(255,0,0,0.5)"
          d={this.props.path}
        />
        <circle
          ref={ref => {
            this.circle = ref;
          }}
          r={10}
          fill="orange"
        />
      </g>
    );
  }
}

export class AdvancedLinkFactory extends DefaultLinkFactory {
  constructor() {
    super();
    this.type = 'advanced';
  }

  getNewInstance(initialConfig) {
    return new AdvancedLinkModel();
  }

  generateLinkSegment(model, widget, selected, path) {
    return (
      <AdvancedLinkSegment model={model} path={path} />
    );
  }
}

/**
 *
 * Simple link styling demo
 *
 * @Author kfrajtak
 */
export default () => {
  //1) setup the diagram engine
  const engine = new DiagramEngine();
  engine.installDefaultFactories();
  engine.registerLinkFactory(new AdvancedLinkFactory());

  // create some nodes
  const node1 = new DefaultNodeModel('Source', 'rgb(0,192,255)');
  let port1 = node1.addPort(new AdvancedPortModel(false, 'out-1', 'Out thick'));
  let port2 = node1.addPort(new DefaultPortModel(false, 'out-2', 'Out default'));
  node1.setPosition(100, 100);

  const node2 = new DefaultNodeModel('Target', 'rgb(192,255,0)');
  const port3 = node2.addPort(new AdvancedPortModel(true, 'in-1', 'In thick'));
  const port4 = node2.addPort(new DefaultPortModel(true, 'in-2', 'In default'));
  node2.setPosition(300, 100);

  const node3 = new DefaultNodeModel('Source', 'rgb(0,192,255)');
  node3.addPort(new AdvancedPortModel(false, 'out-1', 'Out thick'));
  node3.addPort(new DefaultPortModel(false, 'out-2', 'Out default'));
  node3.setPosition(100, 200);

  const node4 = new DefaultNodeModel('Target', 'rgb(192,255,0)');
  node4.addPort(new AdvancedPortModel(true, 'in-1', 'In thick'));
  node4.addPort(new DefaultPortModel(true, 'in-2', 'In default'));
  node4.setPosition(300, 200);

  const model = new DiagramModel();

  model.addAll(port1.link(port3), port2.link(port4));

  // add everything else
  model.addAll(node1, node2, node3, node4);

  // load model into engine
  engine.setDiagramModel(model);

  // render the diagram!
  return <DiagramWidget className="srd-demo-canvas" diagramEngine={engine} />;
};
