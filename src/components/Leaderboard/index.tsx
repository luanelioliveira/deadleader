import { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
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

import { RiFlagFill } from "react-icons/ri";

import team12Logo from "../../assets/team12.jpeg";

import ranking from "../../data/ranking";

import { Rank } from "../../types/Rank";

const workouts = [
  { name: "Overall", value: "overall" },
  { name: "Workout 1 (08/08)", value: "workout1" },
  { name: "Workout 2 (09/08)", value: "workout2" },
  { name: "Workout 3 (11/08)", value: "workout3" },
  { name: "Workout 4 (12/08)", value: "workout4" },
];

export function Leaderboard() {
  const [category, setCategory] = useState("rx");
  const [workout, setWorkout] = useState("overall");

  const rankFiltredByWorkout = filterByWorkoutIfIsNotOverall(ranking, workout);

  const rankFiltredByCategory = filterByCategory(
    rankFiltredByWorkout,
    category
  );

  const rankCalculated = calculatePoints(rankFiltredByCategory, workout);

  const rankOrdered = orderByPoints(rankCalculated);

  function filterByWorkoutIfIsNotOverall(leaderboard: Rank[], workout: string) {
    if (workout !== "overall") {
      return leaderboard.filter((player) => player.workout === workout);
    }
    return leaderboard;
  }

  function filterByCategory(leaderboard: Rank[], category: string) {
    return leaderboard.filter((player) => player.category === category);
  }

  function orderByPoints(leaderboard: Rank[]) {
    return leaderboard.sort((a, b) => (a.points < b.points ? -1 : 1));
  }

  function calculatePoints(leaderboard: Rank[], workout: string) {
    if (workout !== "overall") {
      return [...leaderboard];
    }

    const leaderBoardCalculated = Object.values(
      leaderboard.reduce((prev, next) => {
        const key = next.name + "-" + next.alias;

        if (!prev[key]) {
          prev[key] = { ...next, points: 0 };
        }

        if (!next.eliminated) {
          prev[key].points = prev[key].points + next.points;
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
              value={workout}
              onChange={(e) => {
                setWorkout(e.target.value);
              }}
            >
              {workouts.map((workout) => (
                <option key={workout.value} value={workout.value}>
                  {workout.name}
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
                    <HStack spacing={4}>
                      <Box>
                        <Text fontWeight="bold">{rank.alias}</Text>
                        <Text fontSize="small" color="gray.300">
                          {rank.name}
                        </Text>
                      </Box>
                      <Box>
                        {workout !== "overall" && rank.eliminated && (
                          <Icon
                            as={RiFlagFill}
                            w={4}
                            h={4}
                            color="purple.500"
                          />
                        )}
                      </Box>
                    </HStack>
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
