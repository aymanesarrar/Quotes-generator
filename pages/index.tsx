import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import useFetch, { Data } from "../components/hooks/useFetch";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const data: Data[] | undefined = useFetch(
    "https://quote-garden.herokuapp.com/api/v3/quotes/random"
  );
  console.log(data);
  return (
    <Flex minH="100vh" flexDirection="column">
      <Flex justifyContent="flex-end" width="100%" padding="1.5rem" gap="1rem">
        <Button marginLeft="auto">random</Button>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MdLightMode /> : <MdNightlight />}
        </Button>
      </Flex>
      <Flex flex="1">
        <Flex
          flex="1"
          border="1px solid black"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {data &&
            data.map((text) => (
              <VStack key={text?._id} gap="2rem">
                <Text
                  as="p"
                  width="50%"
                  fontSize="2xl"
                  textAlign="start"
                  padding="2rem"
                  borderLeft="8px solid #F7DF94"
                  fontWeight="bold"
                >
                  {text?.quoteText}
                </Text>
                <HStack
                  backgroundColor="#333333"
                  width="50%"
                  justifyContent="space-between"
                  padding="2rem"
                >
                  <VStack>
                    <Text as="h2" color="white" fontWeight="bold">
                      {text?.quoteAuthor}
                    </Text>
                    <Text color="#828282" fontWeight="bold" as="span">
                      {text?.quoteGenre}
                    </Text>
                  </VStack>
                  <BsArrowRight color="white" fontWeight="bold" />
                </HStack>
              </VStack>
            ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
