import { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Flex,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import team12Logo from "../../assets/team12.jpeg";

import { players } from "../../data/leaderboard";

export function Leaderboard() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [category, setCategory] = useState("rx");

  const playersFiltred = players
    .filter((player) => player.category === category)
    .map((player) => {
      return {
        ...player,
        rank: player.points * player.factor,
      };
    })
    .sort((a, b) => (a.rank < b.rank ? -1 : 1));

  function formatName(fullName: string, alias: string) {
    return fullName + " (" + alias + ")";
  }

  function formatPosition(position) {
    if (position === 0) return "🥇";
    if (position === 1) return "🥈";
    if (position === 2) return "🥉";
    return position + 1;
  }

  return (
    <VStack
      align="stretch"
      my={6}
      maxWidth={900}
      mx="auto"
      bg="gray.800"
      borderRadius={8}
      spacing={2}
    >
      <Box>
        <VStack spacing={4} p={8}>
          <Box>
            <Avatar size="2xl" src={team12Logo.src} />
          </Box>

          <Box>
            <Text fontSize="4xl" fontWeight="bold" letterSpacing="tight">
              Team 12AM
            </Text>
          </Box>

          <Box>
            <Stack direction="row" spacing={4}>
              <Button
                colorScheme="purple"
                variant={category === "rx" ? "solid" : "outline"}
                onClick={() => {
                  setCategory("rx");
                }}
              >
                RX
              </Button>
              <Button
                colorScheme="purple"
                variant={category === "intermediate" ? "solid" : "outline"}
                onClick={() => {
                  setCategory("intermediate");
                }}
              >
                Intermediate
              </Button>
            </Stack>
          </Box>
        </VStack>
      </Box>

      <Box px={2}>
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
            {playersFiltred.map((player, position) => {
              return (
                <Tr>
                  <Td textAlign={"center"} px={4}>
                    {formatPosition(position)}
                  </Td>
                  <Td px={4} w="90%">
                    <Box>
                      <Text fontWeight="bold">{player.alias}</Text>
                      <Text fontSize="small" color="gray.300">
                        {player.name}
                      </Text>
                    </Box>
                  </Td>
                  <Td px={4} isNumeric>
                    {player.points}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </VStack>
  );
}
