import * as React from "react";
import ModComponent from "./Mod"

interface ModInfo {
  name: string,
  description: string,
  version: string,
  author: string,
  contact: string,
  modType: string,
  download: string,
  size: number
}

interface ListComponentState {
  error: any,
  isLoaded: boolean,
  mods: Map<string, ModInfo>
}

export default class ListComponent extends React.Component <{}, ListComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      mods: new Map()
    };
  }

  componentDidMount() {
    fetch("/repository.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            mods: new Map(Object.entries(result))
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  getModComponents(): any {
    const comps: any[] = []
    console.log(this.state.mods)
    this.state.mods.forEach((modInfo: ModInfo, modId: string) => {
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
    const {isLoaded} = this.state
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