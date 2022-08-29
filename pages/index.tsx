import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import useFetch, { Data } from "../components/hooks/useFetch";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const data: Data[] | undefined = useFetch(
    "https://quote-garden.herokuapp.com/api/v3/quotes/random"
  );
  console.log(data);
  return (
    <Box minH="100vh" position="relative">
      <Flex justifyContent="flex-end" width="100%" padding="1.5rem" gap="1rem">
        <Button marginLeft="auto">random</Button>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MdLightMode /> : <MdNightlight />}
        </Button>
      </Flex>
      <Flex>
        <Flex flex="1" border="1px solid black" flexDirection="column">
          {data &&
            data.map((text) => (
              <Text key={text?._id} as="p">
                {text?.quoteText}
              </Text>
            ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
