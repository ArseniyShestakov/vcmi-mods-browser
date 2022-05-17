import * as React from "react";
import AppContext from "../AppContext";
import { VStack, StackDivider, Center, Button, Heading, Input } from '@chakra-ui/react';

export default class IntertestComponent extends React.Component <{}, any> {
  static contextType = AppContext
  context!: React.ContextType<typeof AppContext>
  textInput: any

  constructor(props: any) {
    super(props);
    this.state = {
      log: [],
      searchInput: ""
    };
    this.textInput = React.createRef();
  }

  addLog(text: string) {
    const updatedLog = this.state.log;
    updatedLog.unshift(<Center>{text}</Center>);

    this.setState({
        log: updatedLog
    });
  }

  componentDidMount() {
    if (this.textInput.current) {
      this.textInput.current.focus();
    }
    window.Intercom('boot', {
        api_base: "https://api-iam.intercom.io",
        app_id: "d6wzvc3u",
    });
    this.setHooks()
  }

  setHooks() {
    window.Intercom('onShow', () => {
        this.addLog("Intercom event onShow");
    });
    window.Intercom('onHide', () => {
        this.addLog("Intercom event onHide");
        if (this.textInput.current) {
          this.textInput.current.focus();
        }
    });
  }

  handleInputChange (e: any) {
    const str = e.target.value
    if (str.length > 0 && str === this.state.searchInput) {
      return
    }
    window.Intercom('trackEvent', 'track-event-pressed');
    const {name, value } = e.target;
    this.setState({[name]: value});
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
              <Input type="text" name="searchInput" ref={this.textInput} value={this.state.searchInput} onChange={this.handleInputChange.bind(this)}  />
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