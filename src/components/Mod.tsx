import * as React from "react";

interface ModComponentProps {
    short: boolean,
    id: string,
    name: string,
    version: string,
    size: number
}

export default class ModComponent extends React.Component <ModComponentProps, any> {
  render() {
    if (this.props.short) {
        return (
          <li>
              {this.props.id}: {this.props.name} - {this.props.version} ({this.props.size} kb)
          </li>
        );
    } else {
        return (
          <div>
              <p>id: {this.props.id}:</p>
              <p>name: {this.props.name}</p>
              <p>version: {this.props.version}</p>
              <p>size: {this.props.size} kb</p>
          </div>
        );
    }
  }
}