import React from 'react';

export class TrayItemWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{ borderColor: this.props.color }}
        draggable={true}
        onDragStart={event => {
          event.dataTransfer.setData('storm-diagram-node', JSON.stringify(this.props.model));
        }}
        className="tray-item"
      >
        {this.props.name}
      </div>
    );
  }
}
