import * as React from "react";
import { Link } from "react-router-dom";
import AppContext, { ModInfo } from "../AppContext";

interface ModComponentProps {
    short: boolean,
    id: string,
    name?: string,
    version?: string,
    size?: number
}

export default class ModComponent extends React.Component <ModComponentProps, any> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>

  getModInfo() : ModInfo {
    console.log(this.context)
    return this.context.mods.get(this.props.id) as ModInfo
  }

  render() {
    if (this.props.short) {
        const mod = this.props;
        return (
          <li>
            <Link to={`/mod/${mod.id}`}>
                {mod.id}: {mod.name} - {mod.version} ({mod.size} kb)
            </Link>
          </li>
        );
    } else if (this.context.isLoaded) {
        const mod = this.getModInfo()
        return (
          <div>
              <p>id: {this.props.id}:</p>
              <p>name: {mod.name}</p>
              <p>version: {mod.version}</p>
              <p>size: {mod.size} kb</p>
          </div>
        );
    } else {
        return (
          <div>
              <p>Loading...</p>
          </div>
        );
    }
  }
}