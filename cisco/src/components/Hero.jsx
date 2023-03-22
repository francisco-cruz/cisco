import { Box, Text, Flex, useMediaQuery, Image } from "@chakra-ui/react";
import Bg from "../assets/images/bg.webp";
import profile from "../assets/images/profile.png";
import FadeOnScroll from "./commnons/FadeOnScroll";
const Hero = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Flex
        pos="relative"
        direction={{ base: "column-reverse", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        width="100vw"
        maxWidth="100vw"
        height={isLargerThan768 ? "100vh" : "100%"}
        px={isLargerThan768 ? "104px" : "24px"}
        pt={isLargerThan768 ? "0" : "124px"}
        bgImage={Bg}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        <Box flex="1">
          <FadeOnScroll>
            <Flex direction="column">
              <Text
                textTransform="uppercase"
                lineHeight="1.1em"
                fontWeight="700"
                color="green.400"
                fontSize={{ base: "44px", md: "64px" }}
              >
                cisco
              </Text>
              <Text
                color="black"
                lineHeight="1.1em"
                fontSize={{ base: "44px", md: "64px" }}
              >
                UX/UI Designer
              </Text>
            </Flex>
            <Text mt="1rem" lineHeight="1em" fontSize={isLargerThan768 ? "32px" : "20px"}>
              Interfaces that generate indetity
            </Text>
            <Box mt="32px">
              <button className="download-button">
                <div className="docs">
                  <svg
                    className="css-i6dzq1"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    fill="none"
                    stroke-width="2"
                    stroke="currentColor"
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line y2="13" x2="8" y1="13" x1="16"></line>
                    <line y2="17" x2="8" y1="17" x1="16"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>{" "}
                  Donwload CV
                </div>

                <div className="download">
                  <svg
                    className="css-i6dzq1"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    fill="none"
                    stroke-width="2"
                    stroke="currentColor"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line y2="3" x2="12" y1="15" x1="12"></line>
                  </svg>
                </div>
              </button>
            </Box>
          </FadeOnScroll>
        </Box>
        <Image
          src={profile}
          alt="Profile image"
          maxW={{ base: "60%", md: "45%" }}
        />
      </Flex>
    </>
  );
};

export default Hero;
