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
  Fade,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useEffect } from "react";
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
        <Slideshow />

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
            fontSize={{ base: "2xl", md: "4xl" }}
            color="#E85816"
            p={{ base: "16x", md: "32px" }}
            fontWeight={"bold"}
          >
            Gain big-business insights, streamline operations, and quickly adapt
            to market changes. Bring your authentic vision to life and let your
            passion drive growth in a rapidly advancing technological world.
          </Text>
        </VStack>
      </Grid>
    </Box>
  );
}

const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Array of images to display in the slideshow
  const images = [
    <StaticImage
      src="../images/small-business.jpg"
      alt="Image 1"
      layout="fullWidth"
      style={{ width: "100%", height: "100%" }}
      placeholder="blurred"
    />,
    <StaticImage
      src="../images/small-business2.jpg"
      alt="Image 2"
      layout="fullWidth"
      style={{ width: "100%", height: "100%" }}
      placeholder="blurred"
    />,
    <StaticImage
      src="../images/small-business3.jpg"
      alt="Image 3"
      layout="fullWidth"
      style={{ width: "100%", height: "100%" }}
      placeholder="blurred"
    />,
    <StaticImage
      src="../images/small-business4.avif"
      alt="Image 3"
      layout="fullWidth"
      style={{ width: "100%", height: "100%" }}
      placeholder="blurred"
    />,
  ];

  // Cycle through images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <Box position="relative" width="100%" height="100%">
      {images.map((image, index) => (
        <Fade in={index === currentImage} key={index}>
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            opacity={index === currentImage ? 1 : 0}
            transition="opacity 0.2s ease-in-out"
          >
            {image}
          </Box>
        </Fade>
      ))}
    </Box>
  );
};
