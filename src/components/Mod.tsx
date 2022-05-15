import * as React from "react";
import AppContext, { ModInfo } from "../AppContext";
import { Grid, GridItem } from '@chakra-ui/react';

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
            <p>
                {mod.id}: {mod.name} - {mod.version} ({mod.size} kb)
            </p>
        );
    } else if (this.context.isLoaded) {
        const mod = this.getModInfo()
        return (
            <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={1} bg='tomato'>id: {this.props.id}</GridItem>
                <GridItem colSpan={2} bg='papayawhip'>name: {mod.name}</GridItem>
                <GridItem colSpan={2} bg='papayawhip'>version: {mod.version}</GridItem>
                <GridItem colSpan={4} bg='tomato'>size: {mod.size} kb</GridItem>
            </Grid>
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