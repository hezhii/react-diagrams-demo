import * as React from 'react';

export default class WorkspaceWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="srd-demo-workspace">
        <div className="srd-demo-workspace__toolbar">{this.props.buttons}</div>
        <div className="srd-demo-workspace__content">{this.props.children}</div>
      </div>
    );
  }
}
