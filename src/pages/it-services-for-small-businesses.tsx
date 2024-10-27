import {
  Badge,
  Box,
  Input,
  Text,
  Button,
  Flex,
  Grid,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import TopNav from "../Layout/TopNav";

export default function HeroSection() {
  return (
    <Box h={"100vh"}>
      <TopNav />
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={6}
        alignItems="center"
        h={"calc(100% - 50px)"}
      >
        <Box width="100%" height="100%" position="relative">
          <StaticImage
            src="../images/small-business.jpg"
            alt="Abstract green design"
            placeholder="blurred"
            layout="fullWidth" // Set to fullWidth to occupy 100% width
            style={{ width: "100%", height: "100%" }} // Ensure it takes full width and height
          />
        </Box>

        {/* Right Section: Content */}
        <VStack align="flex-start" spacing={6}>
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "6xl" }}
            fontWeight="bold"
            p={{ base: "16x", md: "32px" }}
          >
            Big Impact Technology for Small Businesses
          </Heading>
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            color="#E85816"
            p={{ base: "16x", md: "32px" }}
            fontWeight={'bold'}
          >
            Gain big-business insights, streamline operations, and quickly adapt
            to market changes. Our solutions empower you to uncover hidden
            opportunities, connect deeper with customers, and stay competitive
            in an evolving digital landscape.
          </Text>
        </VStack>
      </Grid>
    </Box>
  );
}
