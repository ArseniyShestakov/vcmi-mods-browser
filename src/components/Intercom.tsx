import * as React from "react";
import AppContext, { ModInfo } from "../AppContext";
import { VStack, StackDivider, Box, Center, Button, Text, Heading } from '@chakra-ui/react';
import { Link } from "react-router-dom";

export default class IntercomComponent extends React.Component <{}, any> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>

  constructor(props: any) {
    super(props);
    this.state = {
      log: []
    };
  }

  addLog(text: string) {
    const updatedLog = this.state.log;
    updatedLog.unshift(<Center id="leog">{text}</Center>);

    this.setState({
        log: updatedLog
    });
  }

  setHooks() {
    window.Intercom('onShow', () => {
        this.addLog("Intercom event onShow");
    });
    window.Intercom('onHide', () => {
        this.addLog("Intercom event onHide");
    });
    window.Intercom('onUnreadCountChange', () => {
        this.addLog("Intercom event onUnreadCountChange");
    });
  }

  callBootDefault() {
    window.Intercom('boot', {
        api_base: "https://api-iam.intercom.io",
        app_id: "d6wzvc3u",
    });
    this.setHooks()
  }

  callBootLogged() {
    window.Intercom('boot', {
        api_base: "https://api-iam.intercom.io",
        app_id: "d6wzvc3u",
        name: "Test Name",
        email: "test@example.com",
        created_at: "1652313796"
    });
    this.setHooks()
  }

  callShutdown() {
    window.Intercom('shutdown');
  }

  setSettings() {
    window.intercomSettings = {
        app_id: 'd6wzvc3u',
        alignment: 'left',
        horizontal_padding: 20,
        vertical_padding: 20,
        name: "Test Name",
        email: "test@example.com",
        created_at: "1652313796"
      };
  }

  callUpdate() {
    window.Intercom('update');
  }

  callHide() {
    window.Intercom('hide');
  }

  callShow() {
    window.Intercom('show');
  }

  callShowMessages() {
    window.Intercom('showMessages');
  }

  callShowNewMessages() {
    window.Intercom('showNewMessages');
  }

  trackEvent() {
    window.Intercom('trackEvent', 'track-event-pressed');
  }

  getVisitorId() {
    window.Intercom('getVisitorId');
  }

  startTour() {
    window.Intercom('startTour', 24921839);
  }

  showArticle() {
    window.Intercom('showArticle', 6215827);
  }

  startSurvey() {
    this.callHide()
    window.Intercom('startSurvey', 24921838);
  }

  render() {
    const {log} = this.state
    const {isLoaded} = this.context
    if (isLoaded) {
      return (
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'
        >
            <Center>
                <Button onClick={this.callBootDefault.bind(this)}>Boot Default</Button>
                <Button onClick={this.callBootLogged.bind(this)}>Boot Logged</Button>
                <Button onClick={this.callShutdown}>Shutdown</Button>
            </Center>
            <Center>
                <Button onClick={this.setSettings}>Set Settings</Button>
                <Button onClick={this.callUpdate}>Update</Button>
            </Center>
            <Center>
                <Button onClick={this.callShow}>Show</Button>
                <Button onClick={this.callHide}>Hide</Button>
                <Button onClick={this.callShowMessages}>Show Messages</Button>
                <Button onClick={this.callShowNewMessages}>Show New Messages</Button>
            </Center>
            <Center>
                <Button onClick={this.trackEvent}>trackEvent</Button>
                <Button onClick={this.getVisitorId}>getVisitorId</Button>
            </Center>
            <Center>
                
                <Button onClick={this.startTour}>startTour</Button>
                <Button onClick={this.showArticle}>showArticle</Button>
                <Button onClick={this.startSurvey.bind(this)}>startSurvey</Button>
            </Center>
            <Center>
                <Heading size="md">Logs</Heading>
            </Center>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
            >
                {log}
            </VStack>
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