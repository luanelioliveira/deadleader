import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Header } from '../../../components/Header';
import { Sidebar } from '../../../components/Sidebar';

import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Pagination } from '../../../components/Pagination';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <Sidebar />

        <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
          <Flex mb={8} justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Users
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="small"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="16"></Icon>}
            >
              Create New
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={[4, 4, 6]} color="gray.600" w={8}>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>User</Th>
                {isWideVersion && <Th>Create At</Th>}
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={[4, 4, 6]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Luan Oliveira</Text>
                    <Text fontSize="small" color="gray.300">
                      luannn@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>August 4, 2022</Td>}
                <Td width={4}>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"></Icon>}
                  >
                    {isWideVersion && 'Edit'}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={[4, 4, 6]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Luan Oliveira</Text>
                    <Text fontSize="small" color="gray.300">
                      luannn@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>August 4, 2022</Td>}
                <Td width={4}>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"></Icon>}
                  >
                    {isWideVersion && 'Edit'}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={[4, 4, 6]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Luan Oliveira</Text>
                    <Text fontSize="small" color="gray.300">
                      luannn@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>August 4, 2022</Td>}
                <Td width={4}>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"></Icon>}
                  >
                    {isWideVersion && 'Edit'}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination itemsPerPage={10} totalItems={45} pageCurrent={5} />
        </Box>
      </Flex>
    </Box>
  );
}
