import { Box, Button, Flex } from "@chakra-ui/react";

import { Logo } from "../components/Header/Logo";

import { Leaderboard } from "../components/Leaderboard";

export default function Home() {
  return (
    <Box px={4} w="100%" maxWidth={900} mx="auto">
      <Flex as="header" h={20} align="center">
        <Logo />
        <Flex align="center" ml="auto">
          <Button as="a" colorScheme="pink">
            Contact Us
          </Button>
        </Flex>
      </Flex>

      <Leaderboard />
    </Box>
  );
}
