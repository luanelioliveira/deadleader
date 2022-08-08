import { Avatar, Box, Button, Flex, Icon, Text, useBreakpointValue, VStack } from "@chakra-ui/react"
import Link from "next/link";
import { Logo } from "../components/Header/Logo";

import { Leaderboard } from "../components/Leaderboard";

export default function Home() {
  return (
    <Flex direction="column">
      <Flex as="header" w="100%" maxWidth={1480} h={20} mx="auto" mt={2} px={[6, 8]} align="center">
        <Logo />
        <Flex align="center" ml="auto">
          <Button as="a" colorScheme="pink">
              Contact Us
          </Button>
        </Flex>  
      </Flex>

      <Flex w="100%" minHeight={300} maxWidth={1480} mx="auto" px={[6, 8]} py={6}>
        <Flex w="100%" bg="gray.800" borderRadius={8}>
          <Leaderboard />
        </Flex>
      </Flex>
    </Flex>
  )
}