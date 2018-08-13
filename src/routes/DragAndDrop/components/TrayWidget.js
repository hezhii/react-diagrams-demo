import React from 'react';

export class TrayWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="tray">{this.props.children}</div>;
  }
}
