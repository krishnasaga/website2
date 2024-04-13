import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Box,
  Center,
  Heading,
  Highlight,
  List,
  ListItem,
  Text,
  useColorMode,
  Code,
  Button,
  calc,
  CodeProps,
  Link as ChakraLink,
  Divider,
  Flex,
  Image,
} from "@chakra-ui/react";
import { css, keyframes } from '@emotion/react'
import { Service } from '../Components/Service';
import { FloatingAnimation } from "../utils";

const $lineHeight = "1rem";

const PurpleCode = (props: CodeProps) => (
  <Code colorScheme="purple" {...props} />
);


const IndexPage: React.FC<PageProps> = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box as="main">
      <Center height={"100%"} textAlign="center" mt={'50px'}>
        <Flex gap={$lineHeight} flexDir="column">
          <Heading
            as="h1"
            size="4xl"
            lineHeight={calc($lineHeight).multiply(4).toString()}
          >
            <Highlight
              query="With Speed"
              styles={{ color: "purple.600", _dark: { color: "purple.400" } }}
            >
              Resilience Works
            </Highlight>
          </Heading>
          <Text fontSize={["2xl","4xl"]} fontWeight={'bold'} >
            Empowering Your Business Through Unwavering Resilience.            
          </Text>
        </Flex>
      </Center>
      <Center>
        <FloatingAnimation>
          <Image maxW={["100%","50%"]} marginLeft={['50px','250px']} src="/static/superherofox.png" />
        </FloatingAnimation>
      </Center>
      <Box>
        <Service />
      </Box>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
