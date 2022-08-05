import { Button, Flex, Icon, Stack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";

import { RiLogoutBoxRLine } from 'react-icons/ri';

export default function Login() {
  return (
    <Flex w={"100vw"} h={"100vh"} align="center" justify="center">
      <Flex as="form" w="100%" maxWidth={360} bg="gray.800" p={8} borderRadius={8} flexDirection="column">
        <Stack spacing={4}>
          <Input name="email" type="email" label="Email" />
          <Input name="password" type="password" label="Password" />
        </Stack>
        <Button as="a" colorScheme="pink" rightIcon={<Icon as={RiLogoutBoxRLine} fontSize="16"></Icon>}>
          Login
        </Button>
      </Flex>
    </Flex>
  )
}
