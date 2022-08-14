import { useState } from "react";

import {
  Box,
  HStack,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { RiFlagFill } from "react-icons/ri";

import { Score } from "../../../types/Score";

interface RankingProps {
  scores: Score[];
}

export function RankingList({ scores }: RankingProps) {
  function formatPosition(position: number) {
    if (position === 0) return "🥇";
    if (position === 1) return "🥈";
    if (position === 2) return "🥉";
    return position + 1;
  }

  return (
    <Box px={2} pt={2} bg="gray.800" borderRadius={8}>
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th textAlign={"center"} px={4}>
              #
            </Th>
            <Th px={4} w="90%">
              Athlete
            </Th>
            <Th px={4}>Points</Th>
          </Tr>
        </Thead>
        <Tbody>
          {scores.map((item, position) => {
            return (
              <Tr key={item.name + item.alias}>
                <Td textAlign={"center"} px={4}>
                  {formatPosition(position)}
                </Td>
                <Td px={4} w="90%">
                  <HStack spacing={4}>
                    <Box>
                      <Text fontWeight="bold">{item.alias}</Text>
                      <Text fontSize="small" color="gray.300">
                        {item.name}
                      </Text>
                    </Box>
                    <Box>
                      {item.eliminated && (
                        <Icon as={RiFlagFill} w={4} h={4} color="purple.500" />
                      )}
                    </Box>
                  </HStack>
                </Td>
                <Td px={4} isNumeric>
                  {item.points}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
