import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavItems from "./Navitems";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Flex
        className="mynav"
        as="nav"
        borderBottom="#ffffff20 1px solid "
        align="center"
        justify="space-between"
        wrap="wrap"
        w="auto"
        h="auto"
        bg="#F5FFF9"
        border="1px solid #4C4C4C"
        borderRadius="100px"
        color="white"
        px="24px"
        backdropFilter="blur(4px)"
        zIndex="900"
      >
        {isLargerThan768 ? (
          <Flex align="center">
            <NavItems />
          </Flex>
        ) : (
          <IconButton
            aria-label="Abrir menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            color="gray.900"
            _hover={{
              bgColor: "#ffffff",
            }}
            onClick={onOpen}
          />
        )}
      </Flex>

      {!isLargerThan768 && (
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          zIndex="9999"
        >
          <DrawerOverlay />
          <DrawerContent bg="#F5FFF9" pt="40px">
            <DrawerCloseButton />
            <NavItems />
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
