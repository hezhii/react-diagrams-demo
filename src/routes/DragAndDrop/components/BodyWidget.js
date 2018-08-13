import * as React from 'react';
import * as _ from 'lodash';
import {TrayWidget} from './TrayWidget';
import {TrayItemWidget} from './TrayItemWidget';
import {DefaultNodeModel, DiagramWidget} from 'storm-react-diagrams';

export class BodyWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="body">
        <div className="header">
          <div className="title">Storm React Diagrams - Demo 5</div>
        </div>
        <div className="content">
          <TrayWidget>
            <TrayItemWidget model={{ type: 'in' }} name="In Node" color="rgb(192,255,0)" />
            <TrayItemWidget model={{ type: 'out' }} name="Out Node" color="rgb(0,192,255)" />
          </TrayWidget>
          <div
            className="diagram-layer"
            onDrop={event => {
              const data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));
              const nodesCount = _.keys(
                this.props.app
                  .getDiagramEngine()
                  .getDiagramModel()
                  .getNodes(),
              ).length;

              let node = null;
              if (data.type === 'in') {
                node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(192,255,0)');
                node.addInPort('In');
              } else {
                node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(0,192,255)');
                node.addOutPort('Out');
              }
              const points = this.props.app.getDiagramEngine()
                .getRelativeMousePoint(event);
              node.x = points.x;
              node.y = points.y;
              this.props.app
                .getDiagramEngine()
                .getDiagramModel()
                .addNode(node);
              this.forceUpdate();
            }}
            onDragOver={event => {
              event.preventDefault();
            }}
          >
            <DiagramWidget diagramEngine={this.props.app.getDiagramEngine()} />
          </div>
        </div>
      </div>
    );
  }
}
