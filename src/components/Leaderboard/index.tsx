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

const players = [
  { alias: "Racco", name: "Jonatas", points: 140, categorie: "rx" },
  { alias: "Fano", name: "Estafano", points: 135, categorie: "rx" },
  { alias: "Anão", name: "Diego", points: 130, categorie: "rx" },
  { alias: "AeroXimiti", name: "Guilherme", points: 125, categorie: "rx" },
  { alias: "Steffens", name: "Rafael", points: 120, categorie: "rx" },
  { alias: "Moreli", name: "Bruno", points: 115, categorie: "rx" },
  { alias: "Frank", name: "Rodrigo", points: 110, categorie: "rx" },
  { alias: "Pepe", name: "Felipe", points: 105, categorie: "rx" },
  { alias: "Show", name: "Bruno", points: 100, categorie: "rx" },
  { alias: "Sagin", name: "Paula", points: 95, categorie: "rx" },
  { alias: "Lari", name: "Larissa", points: 90, categorie: "rx" },
  { alias: "Coach", name: "Luiz", points: 100, categorie: "rx" },
  { alias: "Metal", name: "Camila", points: 90, categorie: "rx" },
  { alias: "Kapoti", name: "Bruno", points: 85, categorie: "intermediate" },
  { alias: "Delai", name: "Fran", points: 80, categorie: "intermediate" },
  { alias: "Martineli", name: "Diego", points: 75, categorie: "intermediate" },
  { alias: "Coach", name: "Michel", points: 70, categorie: "intermediate" },
  { alias: "Desafio", name: "Rodrigo", points: 70, categorie: "intermediate" },
  { alias: "Guima", name: "Guilherme", points: 70, categorie: "intermediate" },
  { alias: "Delai", name: "Diogo", points: 70, categorie: "intermediate" },
  { alias: "Silva", name: "Sabrina", points: 70, categorie: "intermediate" },
  { alias: "Bandeira", name: "Aline", points: 70, categorie: "intermediate" },
  {
    alias: "CapotaAberta",
    name: "João",
    points: 70,
    categorie: "intermediate",
  },
  { alias: "Bebidas", name: "Thiago", points: 70, categorie: "intermediate" },
  { alias: "Alves", name: "Djozemara", points: 70, categorie: "intermediate" },
  { alias: "Serjão", name: "Sergio", points: 70, categorie: "intermediate" },
];

export function Leaderboard() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [categorie, setCategorie] = useState("rx");

  const playersFiltred = players.filter(
    (player) => player.categorie === categorie
  );

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
                variant={categorie === "rx" ? "solid" : "outline"}
                onClick={() => {
                  setCategorie("rx");
                }}
              >
                RX
              </Button>
              <Button
                colorScheme="purple"
                variant={categorie === "intermediate" ? "solid" : "outline"}
                onClick={() => {
                  setCategorie("intermediate");
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
