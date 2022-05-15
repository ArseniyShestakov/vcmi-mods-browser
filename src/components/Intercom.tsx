import * as React from "react";
import AppContext, { ModInfo } from "../AppContext";
import { VStack, StackDivider, Box, Center, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";

export default class IntercomComponent extends React.Component <{}> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>

  callBootDefault() {
    window.Intercom('boot', {
        api_base: "https://api-iam.intercom.io",
        app_id: "d6wzvc3u",
    });
  }

  callBootLogged() {
    window.Intercom('boot', {
        api_base: "https://api-iam.intercom.io",
        app_id: "d6wzvc3u",
        name: "Test Name",
        email: "test@example.com",
        created_at: "1652313796"
    });
  }

  callShutdown() {
    window.Intercom('shutdown');
  }

  render() {
    const {isLoaded} = this.context
    if (isLoaded) {
      return (
        <Center>
            <Button onClick={this.callBootDefault}>Boot Default</Button>
            <Button onClick={this.callBootLogged}>Boot Logged</Button>
            <Button onClick={this.callShutdown}>Shutdown</Button>
        </Center>
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