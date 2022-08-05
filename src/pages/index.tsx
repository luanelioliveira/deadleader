import { Box, Button, Flex, Icon, Text, useBreakpointValue, VStack } from "@chakra-ui/react"
import Link from "next/link";
import { Logo } from "../components/Header/Logo";

import { RiLogoutBoxRLine } from 'react-icons/ri';


export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex direction="column" h="100vh">
      <Flex as="header" w="100%" maxWidth={1480} h={20} mx="auto" mt={2} px={[6, 8]} align="center">
        <Logo />
        <Flex align="center" ml="auto">
          <Link href="/login">
            <Button as="a" colorScheme="pink" rightIcon={<Icon as={RiLogoutBoxRLine} fontSize="16"></Icon>}>
              Login
            </Button>
          </Link>
        </Flex>  
      </Flex>

      <Flex w="100%" minHeight={400} maxWidth={1480}  mx="auto" my={6} p={[6, 8]} pb={4}>
          <Flex w="100%" bg="gray.800" borderRadius={8} align="center" justify="center">
            <Text fontSize={["2xl", "3xl", "7xl"]} fontWeight="bold" letterSpacing="tight">
              Em Breve Novidades!
            </Text>
          </Flex>
      </Flex>
    </Flex>
  )
}