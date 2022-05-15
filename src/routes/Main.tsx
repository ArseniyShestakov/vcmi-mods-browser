import { Center } from '@chakra-ui/react';
import logo from '../logo.svg';
import { Heading } from '@chakra-ui/react';

export default function MainRoute() {
    return (
      <Center bg='blackAlpha.500' >
        <Heading>Hello world!</Heading>
        <div>
            <h1></h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </Center>
    );
  }