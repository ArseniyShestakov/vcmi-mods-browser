import { VStack, Center, Heading } from '@chakra-ui/react';
import ListComponent from '../components/List';

export default function ListRoute() {
  return (
    <VStack>
      <Center>
        <Heading>Available mods</Heading>
      </Center>
      <ListComponent></ListComponent>
    </VStack>
  );
}