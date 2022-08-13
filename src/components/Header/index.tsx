import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSideBarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

import { Logo } from "./Logo";
import { NotifiticationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { Sidebar } from "../Sidebar";

export function Header() {
  const { onOpen } = useSideBarDrawer();

  const isLogged = false;

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex as="header" w="100%" h={20} px={[4, 12]} mx="auto" align="center">
      {!isWideVersion && isLogged && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize={24}
          variant="unstyled"
          onClick={onOpen}
          mr={2}
          justifyContent="center"
          display="flex"
        />
      )}

      <Logo />

      <Flex align="center" ml="auto">
        {isLogged && (
          <Flex>
            <NotifiticationNav />
            <Profile showProfileData={isWideVersion} />
          </Flex>
        )}

        {!isLogged && (
          <Button
            as="a"
            size="sm"
            colorScheme="pink"
            href="https://www.linkedin.com/in/luanoliveira"
          >
            Contact Us
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
