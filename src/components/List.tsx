import * as React from "react";
import AppContext, { ModInfo } from "../AppContext";
import ModComponent from "./Mod"


export default class ListComponent extends React.Component <{}> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>
  
  getModComponents(): any {
    const comps: any[] = []
    console.log(this.context.mods)
    this.context.mods.forEach((modInfo: ModInfo, modId: string) => {
      comps.push(<ModComponent
        short={true}
        id={modId}
        name={modInfo.name}
        version={modInfo.version}
        size={modInfo.size}
      />)
    });
    return comps;
  }

  render() {
    const {isLoaded} = this.context
    if (isLoaded) {
      return (
        <ul>
          {this.getModComponents()}
        </ul>
      );
    } else {
      return "Loading...";
    }
  }
}