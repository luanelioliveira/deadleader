import { Box, Button, Flex, Icon, Text, VStack } from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';

import { RiLogoutBoxRLine } from 'react-icons/ri';
import { Logo } from '../../components/Header/Logo';

export default function Login() {
  return (
    <Box w="100%">
      <Flex as="header" h={20} align="center" justify="center" px={6}>
        <Logo />
        <Flex ml="auto">
          <Button
            as="a"
            size="sm"
            colorScheme="pink"
            href="https://www.linkedin.com/in/luanoliveira"
          >
            Contact Us
          </Button>
        </Flex>
      </Flex>

      <Flex align="center" justify="center" mt={[10, 20]}>
        <VStack
          maxWidth={[350, 400]}
          p={8}
          spacing={4}
          align="stretch"
          bg="gray.800"
          borderRadius={8}
          boxShadow="lg"
        >
          <Box>
            <Text fontSize="2xl" color="gray.300" fontWeight="bold" py={2}>
              Sign in to your administrator Account
            </Text>
          </Box>

          <Box>
            <Input name="email" type="email" placeholder="Email" />
          </Box>

          <Box>
            <Input name="password" type="password" placeholder="Password" />
          </Box>

          <Box py={4}>
            <Button
              as="a"
              w="100%"
              colorScheme="pink"
              rightIcon={<Icon as={RiLogoutBoxRLine} fontSize="16"></Icon>}
            >
              Login
            </Button>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}
