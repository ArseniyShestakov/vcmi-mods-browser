import * as React from "react";
import AppContext, { ModInfo } from "../AppContext";
import ModComponent from "./Mod";
import { VStack, StackDivider, Box } from '@chakra-ui/react';
import { Link } from "react-router-dom";

export default class ListComponent extends React.Component <{}> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>
  
  getModComponents(): any {
    const comps: any[] = []
    console.log(this.context.mods)
    this.context.mods.forEach((modInfo: ModInfo, modId: string) => {
      comps.push(
        <Box as={Link} to={`/mod/${modId}`} h='40px' bg='yellow.200'>
          <ModComponent
            short={true}
            id={modId}
            name={modInfo.name}
            version={modInfo.version}
            size={modInfo.size}
          />
        </Box>)
    });
    return comps;
  }

  render() {
    const {isLoaded} = this.context
    if (isLoaded) {
      return (
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'
        >
          {this.getModComponents()}
        </VStack>
      );
    } else {
      return (
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
      >
        Loading...
      </VStack>
      );
    }
  }
}