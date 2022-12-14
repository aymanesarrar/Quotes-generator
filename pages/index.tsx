import {
  Box,
  Button,
  Flex,
  HStack,
  Spinner,
  Text,
  transition,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { createContext, useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import useFetch, { Data } from "../components/hooks/useFetch";
import Layout from "../components/Layout";
import Router from "next/router";
import { useRecoilValue } from "recoil";
import { randomizeState } from "../utils/states";

const Home: NextPage = () => {
  const randomize = useRecoilValue(randomizeState);

  const data: Data[] | undefined = useFetch(
    "https://quote-garden.herokuapp.com/api/v3/quotes/random",
    randomize
  );
  const goToQuotes = () => {
    data && Router.push(`/${data[0].quoteAuthor}`);
  };
  return (
    <Layout random={true}>
      <Flex
        flex="1"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {data && data[0]._id.length !== 0 ? (
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
                cursor="pointer"
                onClick={goToQuotes}
              >
                <VStack alignItems="flex-start">
                  <Text as="h2" color="white" fontWeight="bold">
                    {text?.quoteAuthor}
                  </Text>
                  <Text
                    color="#828282"
                    textAlign="start"
                    fontWeight="bold"
                    as="span"
                  >
                    {text?.quoteGenre}
                  </Text>
                </VStack>
                <BsArrowRight color="white" fontWeight="bold" />
              </HStack>
            </VStack>
          ))
        ) : (
          <Spinner />
        )}
      </Flex>
    </Layout>
  );
};

export default Home;
