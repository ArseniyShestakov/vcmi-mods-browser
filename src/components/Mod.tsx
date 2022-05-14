import * as React from "react";

interface ModComponentProps {
    id: string,
    name: string,
    version: string,
    size: number
}

export default class ModComponent extends React.Component <ModComponentProps, any> {
  render() {
    return (
      <li>
          {this.props.id}: {this.props.name} - {this.props.version} ({this.props.size} kb)
      </li>
    );
  }
}