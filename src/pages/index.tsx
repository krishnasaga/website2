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
            color={'#1A365D'}
          >
            <Highlight
              query="With Speed"
              styles={{ color: "purple.600", _dark: { color: "purple.400" } }}
            >
              Resilience Works
            </Highlight>
          </Heading>
          <Text fontSize={["2xl","4xl"]} fontWeight={'bold'} color={'#4A5568'}>
            Empowering Your Business Through Unwavering Resilience.            
          </Text>
        </Flex>
      </Center>
      <FloatingAnimation>
      <Center>
          <Image maxW={["100%","50%"]} marginLeft={['50px','250px']} src="/superherofox-small.png" />
      </Center>
      </FloatingAnimation>
      <Box>
        <Center my={['20px','40px']}>
          <Heading textAlign={'center'} as={'h2'} fontSize={['40px','48px']}  color={'#1A365D'}>How we enable <br/>your technology to thrive</Heading>
        </Center>
        <Center>
        </Center>
        <Service />

      </Box>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
