import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { RiAddLine, RiPencilLine} from 'react-icons/ri';
import { Pagination } from "../../components/Pagination";


export default function UserList() {
  return (
    <Box>
      <Header />
            
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <Sidebar/>

        <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
          <Flex mb={8} justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Users</Heading>

            <Button as="a" size="sm" fontSize="small" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="16"></Icon>}>
              Create New
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={6} color="gray.600" w={8}>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>User</Th>
                <Th>Create At</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={6}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Luan Oliveira</Text>
                    <Text fontSize="small" color="gray.300">luannn@gmail.com</Text>
                  </Box>
                </Td>
                <Td>August 4, 2022</Td>
                <Td width={8}>
                  <Button as="a" size="sm" fontSize="small" colorScheme="pink" leftIcon={<Icon as={RiPencilLine} fontSize="16"></Icon>}>
                    Edit
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
