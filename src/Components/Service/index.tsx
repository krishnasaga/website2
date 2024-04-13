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
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { css, keyframes } from '@emotion/react'
import { FloatingAnimation } from "../../utils";
const $lineHeight = "1rem";

export const Service  = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box as="main">
     <Grid templateColumns={['1fr','1fr 1fr']}>
        <GridItem>

        </GridItem>
        <GridItem >
            <FloatingAnimation>
               <Image maxW={["100%","50%"]} marginLeft={['50px','250px']} src="/static/analytics.png" />
            </FloatingAnimation>
        </GridItem>
     </Grid>
    </Box>
  );
};
