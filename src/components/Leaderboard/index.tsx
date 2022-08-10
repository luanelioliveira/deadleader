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

import event1 from "../../data/leaderboard-event1";
import event2 from "../../data/leaderboard-event2";

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
  { name: "Event 2 (09/08)", value: "event2" },
];

export function Leaderboard() {
  const [category, setCategory] = useState("rx");
  const [event, setEvent] = useState("overall");

  let rank = [...event1, ...event2] as Rank[];

  const rankFiltredByEvent = filterByEventIfIsNotOverall(rank, event);

  const rankFiltredByCategory = filterByCategory(rankFiltredByEvent, category);

  const rankCalculated = calculatePoints(rankFiltredByCategory, event);

  const rankOrdered = orderByPoints(rankCalculated);

  function filterByEventIfIsNotOverall(leaderboard: Rank[], event: string) {
    if (event !== "overall") {
      return leaderboard.filter((player) => player.event === event);
    }
    return leaderboard;
  }

  function filterByCategory(leaderboard: Rank[], category: string) {
    return leaderboard.filter((player) => player.category === category);
  }

  function orderByPoints(leaderboard: Rank[]) {
    return leaderboard.sort((a, b) => (a.points < b.points ? -1 : 1));
  }

  function calculatePoints(leaderboard: Rank[], event: string) {
    const leaderBoardCalculated = Object.values(
      leaderboard.reduce((prev, next) => {
        const key = next.name + "-" + next.alias;
        if (!prev[key]) {
          prev[key] = { ...next };
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
            {rankOrdered.map((rank, position) => {
              return (
                <Tr key={rank.name + rank.alias}>
                  <Td textAlign={"center"} px={4}>
                    {formatPosition(position)}
                  </Td>
                  <Td px={4} w="90%">
                    <Box>
                      <Text fontWeight="bold">{rank.alias}</Text>
                      <Text fontSize="small" color="gray.300">
                        {rank.name}
                      </Text>
                    </Box>
                  </Td>
                  <Td px={4} isNumeric>
                    {rank.points}
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
