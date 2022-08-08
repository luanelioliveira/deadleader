import { useState } from "react";

import { Avatar, Box, Button, Flex, Stack, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";


import team12Logo from '../../assets/team12.jpeg'

const players = [
  { name: 'Luan Eli Oliveira', points: 140, categorie: 'rx' },
  { name: 'Luan Eli Oliveira', points: 135, categorie: 'rx' },
  { name: 'Luan Eli Oliveira', points: 130, categorie: 'rx' },
  { name: 'Luan Eli Oliveira', points: 125, categorie: 'rx' },
  { name: 'Luan Eli Oliveira', points: 120, categorie: 'rx' },
  { name: 'Luan Eli Oliveira', points: 115, categorie: 'rx' },
  { name: 'Luan Eli Oliveira', points: 110, categorie: 'rx' },
  { name: 'Luan Eli Oliveira', points: 105, categorie: 'rx' },
  { name: 'Luan Eli Oliveira', points: 100, categorie: 'rx' },
  { name: 'Luan Eli Oliveira', points: 95, categorie: 'rx' },
  { name: 'Luan Eli Oliveira', points: 90, categorie: 'rx' },
  { name: 'Luan Eli Oliveira', points: 100, categorie: 'intermediate' },
  { name: 'Luan Eli Oliveira', points: 90, categorie: 'intermediate' },
  { name: 'Luan Eli Oliveira', points: 85, categorie: 'intermediate' },
  { name: 'Luan Eli Oliveira', points: 80, categorie: 'intermediate' },
  { name: 'Luan Eli Oliveira', points: 75, categorie: 'intermediate' },
  { name: 'Luan Eli Oliveira', points: 70, categorie: 'intermediate' }
]

export function Leaderboard() {
  const [categorie, setCategorie] = useState('rx')
  
  const playersFiltred = players.filter((player) => player.categorie === categorie)

  return (
    <Flex w="100%" align="center" direction="column" p={6}>

      <Box mt={4}>
        <Avatar size="2xl" src={team12Logo.src} />
      </Box>

      <Box mt={6}>
        <Text fontSize="4xl" fontWeight="bold" letterSpacing="tight">
          Leaderboard
        </Text>
      </Box>

      <Box mt={6}>
        <Stack direction='row' spacing={4}>
          <Button colorScheme='purple' variant={categorie === 'rx' ? 'solid' : 'outline'} onClick={() => { setCategorie('rx') }}>
            RX
          </Button>
          <Button colorScheme='purple' variant={categorie === 'intermediate' ? 'solid' : 'outline'} onClick={() => { setCategorie('intermediate') }}>
            Intermediate
          </Button>
        </Stack>
      </Box>

      <Box mt={6} w="100%" minHeight={200} maxWidth={600}>
        <Table colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th w={4}>Position</Th>
              <Th>Athlete</Th>
              <Th>Points</Th>
            </Tr>
          </Thead>
          <Tbody>
            {playersFiltred.map((player, position) => {
              return (
                <Tr>
                  <Td><Text>#{position+1}</Text></Td>
                  <Td><Text>{player.name}</Text></Td>
                  <Td><Text>{player.points}</Text></Td>
                </Tr>
              )
            })}
            
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
}
