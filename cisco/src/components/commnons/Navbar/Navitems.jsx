import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";

const NavItems = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} align="center">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/contact">Projects</NavItem>
      <NavItem href="/contact">Services</NavItem>
      <NavItem href="/contact">Contact</NavItem>

    </Flex>
  );
};

const NavItem = ({ href, children }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
  <a href={href}>
    <Box
      mx={3}
      py="13px"
      color="gray.900"
      borderBottom=" 3px solid transparent"
      borderRadius="100px"
      position="relative"
      _hover={{
        color: "black",
      }}
    >
      <Text>{children}</Text>
    </Box>
  </a>
  );
};

export default NavItems;