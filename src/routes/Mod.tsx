import { VStack, Center, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ModComponent from '../components/Mod';

export default function ModRoute() {
  let { modId } = useParams();

  return (
    <div data-intercom-target='modinfo'>
      <VStack>
        <Center>
          <Heading>Mod info for "{modId}"</Heading>
        </Center>
        <ModComponent
            short={false}
            id={modId ? modId: ""}
            name={""}
            version={"modInfo.version"}
            size={0}
          />
      </VStack>
    </div>
  );
}