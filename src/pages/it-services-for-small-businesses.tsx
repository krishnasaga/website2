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
    <Box>
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
              Bring your authentic vision to life and let your passion drive
              growth in a rapidly advancing technological world. Gain
              big-business insights, streamline operations, and quickly adapt to
              market changes.
            </Text>
          </VStack>
        </Grid>
      </Box>
      <Box h={"100vh"}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={6}
          alignItems="center"
          h={"calc(100% - 50px)"}
        >
          <VStack align="flex-start" spacing={6} textAlign={'left'}>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "6xl" }}
              fontWeight="bold"
              p={{ base: "16x", md: "32px" }}
            >
              Your Business, Seen and Heard Online
            </Heading>
            <VStack p={{ base: "16x", md: "32px" }}>
              <Text
                fontSize={{ base: "lg", md: "lg" }}
                color="#E85816"
                fontWeight={"bold"}
              >
                A Website the design resonates with and reinforces the brand
                identity.
              </Text>
              <Text
                fontSize={{ base: "lg", md: "lg" }}
                color="#E85816"
                fontWeight={"bold"}
              >
                Develop a sleek, user-friendly UI that enhances customer
                experience.
              </Text>

              <Text
                fontSize={{ base: "lg", md: "lg" }}
                color="#E85816"
                fontWeight={"bold"}
              >
                {" "}
                Design a UI that not only looks great but actively drives
                conversions.
              </Text>

              <Text
                fontSize={{ base: "lg", md: "lg" }}
                color="#E85816"
                fontWeight={"bold"}
              >
                Create an interface that reflects the high quality of the
                client's work.
              </Text>
              <Button>
                Start Your Project
              </Button>
            </VStack>
          </VStack>
          <Box h={"70%"} borderRadius={"20px"} overflow={"hidden"} m={"32px"}>
            <StaticImage
              src="../images/business-online.jpg"
              alt="Your Business, Seen and Heard Online"
              objectFit="cover"
              placeholder="blurred"
            />
          </Box>
        </Grid>
      </Box>
      <Box h={"100vh"}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={6}
          alignItems="center"
          h={"calc(100% - 50px)"}
        >
          {/* Right Section: Content */}
          <VStack align="flex-start" spacing={6}>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "6xl" }}
              fontWeight="bold"
              p={{ base: "16x", md: "32px" }}
            >
              Shine Brighter
            </Heading>
          </VStack>
          <Box p={"40px"}>
            <StaticImage
              src="../images/small-business2.jpg"
              alt="Image 2"
              layout="fullWidth"
              style={{ width: "100%", height: "100%" }}
              placeholder="blurred"
            />
          </Box>
        </Grid>
      </Box>
      <Box h={"100vh"}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={6}
          alignItems="center"
          h={"calc(100% - 50px)"}
        >
          {/* Right Section: Content */}
          <VStack align="flex-start" spacing={6}>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "6xl" }}
              fontWeight="bold"
              p={{ base: "16x", md: "32px" }}
            >
              Payments and Accounting
            </Heading>
            <Text
              fontSize={{ base: "2xl", md: "4xl" }}
              color="#E85816"
              p={{ base: "16x", md: "32px" }}
              fontWeight={"bold"}
            ></Text>
          </VStack>
          <Box p={"40px"}>
            <StaticImage
              src="../images/small-business2.jpg"
              alt="Image 2"
              layout="fullWidth"
              style={{ width: "100%", height: "100%" }}
              placeholder="blurred"
            />
          </Box>
        </Grid>
      </Box>

      <Box h={"100vh"}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={6}
          alignItems="center"
          h={"calc(100% - 50px)"}
        >
          {/* Right Section: Content */}
          <VStack align="flex-start" spacing={6}>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "6xl" }}
              fontWeight="bold"
              p={{ base: "16x", md: "32px" }}
            >
              E Commerce
            </Heading>
            <Text
              fontSize={{ base: "2xl", md: "4xl" }}
              color="#E85816"
              p={{ base: "16x", md: "32px" }}
              fontWeight={"bold"}
            ></Text>
          </VStack>
          <Box p={"40px"}>
            <StaticImage
              src="../images/small-business2.jpg"
              alt="Image 2"
              layout="fullWidth"
              style={{ width: "100%", height: "100%" }}
              placeholder="blurred"
            />
          </Box>
        </Grid>
      </Box>
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
      objectPosition={"50% 50%"}
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
