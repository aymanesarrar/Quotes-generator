import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {}, []);
  return (
    <Box minH="100vh">
      <Flex justifyContent="flex-end" width="100%" padding="1.5rem" gap="1rem">
        <Button marginLeft="auto">random</Button>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MdLightMode /> : <MdNightlight />}
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;
