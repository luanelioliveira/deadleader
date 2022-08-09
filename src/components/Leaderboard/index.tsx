import { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

import team12Logo from "../../assets/team12.jpeg";

import { event1 } from "../../data/leaderboard-event1";

interface Rank {
  event: string;
  alias: string;
  name: string;
  points: number;
  category: string;
  ignore: boolean;
}

const events = [
  { name: "Overall", value: "overall" },
  { name: "Event 1 (08/08)", value: "event1" },
];

export function Leaderboard() {
  const [category, setCategory] = useState("rx");
  const [event, setEvent] = useState("overall");

  let leaderboard = [] as Rank[];

  if (event === "event1") leaderboard = [...event1];

  if (event === "overall") leaderboard = [...event1];

  const leaderboardFiltred = filterByCategory(leaderboard, category);

  const leaderBoardCalculated = calculatePoints(leaderboardFiltred, event);

  const leaderBoardOrdered = orderByPoints(leaderBoardCalculated);

  function filterByCategory(leaderboard: Rank[], category: string) {
    const leaderboardFiltred = leaderboard
      .filter((player) => player.category === category)
      .map((player) => {
        return {
          ...player,
          rank: player.points,
        };
      });

    return leaderboardFiltred;
  }

  function orderByPoints(leaderboard: Rank[]) {
    const leaderBoardOrdered = leaderboard.sort((a, b) =>
      a.points < b.points ? -1 : 1
    );

    return leaderBoardOrdered;
  }

  function calculatePoints(leaderboard: Rank[], event: string) {
    if (event !== "overall") {
      return leaderboard;
    }

    const leaderBoardCalculated = Object.values(
      leaderboard.reduce((prev, next) => {
        const key = next.name + "-" + next.alias;
        if (!prev[key]) {
          prev[key] = next;
        } else {
          prev[key].points += next.points;
        }
        return prev;
      }, [])
    ) as Rank[];

    return leaderBoardCalculated;
  }

  function formatPosition(position: number) {
    if (position === 0) return "🥇";
    if (position === 1) return "🥈";
    if (position === 2) return "🥉";
    return position + 1;
  }

  return (
    <VStack align="stretch" my={6} maxWidth={900} mx="auto" spacing={4}>
      <Box bg="gray.800" borderRadius={8}>
        <VStack spacing={6} p={8}>
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

          <Box w={["100%", "80%"]}>
            <Select
              bg="whiteAlpha.100"
              value={event}
              onChange={(e) => {
                setEvent(e.target.value);
              }}
            >
              {events.map((event) => (
                <option key={event.value} value={event.value}>
                  {event.name}
                </option>
              ))}
            </Select>
          </Box>
        </VStack>
      </Box>

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
            {leaderBoardOrdered.map((player, position) => {
              return (
                <Tr key={player.name + player.alias}>
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
