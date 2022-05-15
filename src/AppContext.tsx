import React from 'react';

export interface ModInfo {
    name: string,
    description: string,
    version: string,
    author: string,
    contact: string,
    modType: string,
    download: string,
    size: number
}

export interface AppContextState {
    error: any,
    isLoaded: boolean,
    mods: Map<string, ModInfo>
  }

const AppContext : React.Context<AppContextState> = React.createContext({} as AppContextState);
export default AppContext;