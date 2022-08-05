import { Box, Button, Checkbox, Divider, Flex, Heading, HStack, Icon, SimpleGrid, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { RiAddLine, RiPencilLine} from 'react-icons/ri';
import { Pagination } from "../../components/Pagination";
import { Input } from "../../components/Form/Input";


export default function CreateUser() {
  return (
    <Box>
      <Header />
            
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <Sidebar/>

        <Box flex={1} borderRadius={8} bg="gray.800" p={[6, 8]}>
          <Heading size="lg" fontWeight="normal">Create User</Heading>
          
          <Divider my={6} borderColor="gray.700" />
          
          <VStack spacing={8}>
            <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
              <Input name="name" label="First Name" />
              <Input name="name" label="Last Name" />
              
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
              <Input name="email" type="email" label="Email"  />
            </SimpleGrid>
            
            <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
              <Input name="password" type="password" label="Password" />
              <Input name="passwordConfirmation" type="password" label="Password Confirmation" />
            </SimpleGrid>
          </VStack>

          <Flex mt={8} justify="flex-end">
            <HStack spacing={4}>
              <Button colorScheme="whiteAlph">Cancel</Button>
              <Button colorScheme="pink">Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
