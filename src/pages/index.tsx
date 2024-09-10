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
              Resilience Works
            </Highlight>
          </Heading>
          <Text fontSize={["2xl", "4xl"]} fontWeight={"bold"} color={"#4A5568"}>
            Empowering Your Business Through Unwavering Resilience.
          </Text>
        </Flex>
      </Center>
      <Box
        sx={{ position: "absolute", width: "100%", height: "100vh" }}
        display={["none", "block", "block", "block"]}
        zIndex={"99"}
      >
        <Foxinfo
          order={4}
          textPosition={"left"}
          top={"290px"}
          left={["calc(29% - 150px)", "calc(29% - 150px)", "calc(29% - 340px)"]}
          title={"Proactive Problem Resolution"}
          description={
            "Our continuous monitoring service ensures that your systems and processes are under constant supervision, allowing us to detect and address issues before they escalate."
          }
          image={<Image src={"/target.webp"} w={"100px"} />}
        />
        <Foxinfo
          order={3}
          textPosition={"left"}
          top={"100px"}
          left={[
            "calc(29% - 15x0px)",
            "calc(29% - 150px)",
            "calc(29% - 290px)",
          ]}
          title={
            <Text>
              Maintain vigilance <br />
              around the clock.
            </Text>
          }
          description={
            "Our continuous monitoring service ensures that your systems and processes are under constant supervision"
          }
          image={<Image src={"/clock-time.webp"} w={"100px"} />}
        />

        <Foxinfo
          order={2}
          top={"290px"}
          left={["calc(50% + 100px)", "calc(50% + 100px)", "calc(50% + 250px)"]}
          title={"Proactive Problem Resolution"}
          description={
            "We will detect and address issues before they escalate."
          }
          image={<Image src={"/target.webp"} w={"100px"} />}
        />
        <Foxinfo
          order={1}
          top={"100px"}
          left={["calc(50% + 100px)", "calc(50% + 100px)", "calc(50% + 200px)"]}
          title={"Probe beyond the visible"}
          description={
            <Text>
              Giving your business the competitive edge it deserves with our{" "}
              <strong>Data Analytics</strong>.{" "}
            </Text>
          }
          image={<Image src={"/bar-chart.webp"} w={"100px"} />}
        />
      </Box>
      <FloatingAnimation>
        <Center>
          <Image
            maxW={["100%", "50%"]}
            marginLeft={["50px", "10%"]}
            src="/superherofox-small.png"
          />
        </Center>
      </FloatingAnimation>

      <Center my={["20px", "40px"]}>
        <Heading
          textAlign={"center"}
          as={"h2"}
          fontSize={["40px", "48px"]}
          color={"#1A365D"}
        >
          How we enable <br />
          your technology to thrive
        </Heading>
      </Center>
      <Center></Center>
      <Service />
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Resilience Works</title>;

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
