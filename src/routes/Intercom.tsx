import { Center } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import IntercomComponent from '../components/Intercom'

export default function IntercomRoute() {
    return (
      <Center bg='blackAlpha.500' >
        <Heading>Intercom Test!</Heading>
        <div>
          <IntercomComponent/>
        </div>
      </Center>
    );
  }