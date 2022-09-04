import { Flex, Button, useColorMode } from "@chakra-ui/react";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";

export default function Layout({
  random,
  children,
}: {
  //Dispatch<SetStateAction<boolean>>
  random: boolean;
  children: ReactNode;
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex minH="100vh" flexDirection="column">
      <Flex justifyContent="flex-end" width="100%" padding="1.5rem" gap="1rem">
        {random && <Button marginLeft="auto">random</Button>}
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MdLightMode /> : <MdNightlight />}
        </Button>
      </Flex>
      <Flex flex="1">{children}</Flex>
    </Flex>
  );
}
