import * as React from "react";
import { Link } from "react-router-dom";

interface ModComponentProps {
    short: boolean,
    id: string,
    name: string,
    version: string,
    size: number
}

export default class ModComponent extends React.Component <ModComponentProps, any> {
  render() {
    const mod = this.props;
    if (mod.short) {
        return (
          <li>
            <Link to={`/mod/${mod.id}`}>
                {mod.id}: {mod.name} - {mod.version} ({mod.size} kb)
            </Link>
          </li>
        );
    } else {
        return (
          <div>
              <p>id: {mod.id}:</p>
              <p>name: {mod.name}</p>
              <p>version: {mod.version}</p>
              <p>size: {mod.size} kb</p>
          </div>
        );
    }
  }
}