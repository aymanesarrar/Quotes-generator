import { VStack, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import useFetch, { Data } from "../components/hooks/useFetch";
import Layout from "../components/Layout";
import { BsArrowRight } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { randomizeState } from "../utils/states";

const Author = (): ReactNode => {
  const router = useRouter();
  const randomize = useRecoilValue(randomizeState);
  const data: Data[] | undefined = useFetch(
    `https://quote-garden.herokuapp.com/api/v3/quotes?author=${
      router.query.author ? router.query.author[0] : ""
    }`,
    randomize
  );
  return (
    <Layout random={false}>
      <VStack gap="2rem">
        {data &&
          data.map((text) => (
            <Text
              key={text?._id}
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
          ))}
      </VStack>
    </Layout>
  );
};
export default Author;
