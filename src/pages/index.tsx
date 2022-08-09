import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";

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

      <Flex align="center" justify="center" mb={8}>
        <footer>
          <Text fontWeight="light" color="gray.700">
            Developed by{" "}
            <Link href="https://www.linkedin.com/in/luanoliveira">
              Luan Oliveira
            </Link>{" "}
            @ 2022
          </Text>
        </footer>
      </Flex>
    </Box>
  );
}
