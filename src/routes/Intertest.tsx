import { Center } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import IntertestComponent from '../components/Intertest'

export default function IntertestRoute() {
    return (
      <Center bg='blackAlpha.500'>
        <Heading>Intercom Auto!</Heading>
        <div data-intercom-target='Intertest'>
          <IntertestComponent/>
        </div>
      </Center>
    );
  }