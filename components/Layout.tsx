import { Flex, Button, useColorMode } from "@chakra-ui/react";
import { Dispatch, ReactNode, SetStateAction, useContext } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { useRecoilState } from "recoil";
import { randomizeState } from "../utils/states";

export default function Layout({
  random,
  children,
}: {
  //Dispatch<SetStateAction<boolean>>
  random: boolean;
  children: ReactNode;
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [randomize, setRandomize] = useRecoilState(randomizeState);
  return (
    <Flex minH="100vh" flexDirection="column">
      <Flex justifyContent="flex-end" width="100%" padding="1.5rem" gap="1rem">
        {random && (
          <Button marginLeft="auto" onClick={() => setRandomize(!randomize)}>
            random
          </Button>
        )}
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MdLightMode /> : <MdNightlight />}
        </Button>
      </Flex>
      <Flex flex="1">{children}</Flex>
    </Flex>
  );
}
