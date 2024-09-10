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
  BoxProps,
} from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import { Service } from "../Components/Service";
import { FloatingAnimation } from "../utils";
import { title } from "process";
import WithSubnavigation from "../Layout/TopNav";

const $lineHeight = "1rem";

const PurpleCode = (props: CodeProps) => (
  <Code colorScheme="purple" {...props} />
);

const IndexPage: React.FC<PageProps> = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box as="main">
      <WithSubnavigation />
      <Center height={"100%"} textAlign="center" mt={"50px"}>
        <Flex gap={$lineHeight} flexDir="column">
          <Heading
            as="h1"
            size="4xl"
            lineHeight={calc($lineHeight).multiply(4).toString()}
            color={"#1A365D"}
          >
            <Highlight
              query="With Speed"
              styles={{ color: "purple.600", _dark: { color: "purple.400" } }}
            >
              Resilience Tech
            </Highlight>
          </Heading>
          <Text fontSize={["2xl", "4xl"]} fontWeight={"bold"} color={"#4A5568"}>
            Mission statement
          </Text>
          <Text fontSize={["1xl", "2xl"]}>
            We are dedicated to empowering small and medium-sized businesses in
            the UK to thrive in today’s rapidly evolving technological
            landscape. Through our expertise in data analytics and site
            reliability engineering, we help these businesses build resilient IT
            systems that balance innovation with business continuity. By
            addressing the unique challenges faced by UK SMEs — from the high
            costs of forming skilled teams to the complexities of maintaining
            operational resilience — we enable them to focus on their core
            business, explore new opportunities, and make calculated decisions
            with confidence. Our mission is to reduce their pain points and
            enhance their capacity to sustain growth and success in a
            competitive market.
          </Text>
        </Flex>
      </Center>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Resilience Tech</title>;

const blinking = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1} 
`;

export const Foxinfo = (
  props: BoxProps & {
    title: string | React.ReactElement;
    description: string | React.ReactElement;
    order: number;
    image?: React.ReactElement;
    textPosition?: "right" | "left";
  }
) => {
  const [state, setState] = React.useState(false);
  React.useLayoutEffect(() => {
    setTimeout(
      () => {
        setState(true);
      },
      1000 * (props.order - 1) + 1000
    );
  }, [props]);

  if (!state) return;

  return (
    <Box
      w={"450px"}
      h={"100px"}
      position={"absolute"}
      {...props}
      css={css`
        animation: ${blinking};
        animation-duration: 0.1s;
        animation-iteration-count: 5;
        animation-timing-function: ease-in-out;
      `}
    >
      <Flex
        alignItems={"top"}
        gap={["5px"]}
        flexDirection={props.textPosition === "left" ? "row-reverse" : "row"}
        textAlign={props.textPosition === "left" ? "right" : "left"}
      >
        <Box w={"100px"}>{props.image}</Box>
        <Box w={"340px"}>
          <Heading fontSize={"28px"} color={"#E85816"}>
            {props.title}
          </Heading>
          <Text color={"#1A365D"}>{props.description}</Text>
        </Box>
      </Flex>
    </Box>
  );
};
