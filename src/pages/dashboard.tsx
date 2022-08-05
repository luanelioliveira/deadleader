import { Flex, SimpleGrid, theme } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ChartDateTime } from "../components/Chart/ChartDateTime";

const categories = [
  '2021-03-18T08:00:00.000Z',
  '2021-03-19T08:00:00.000Z',
  '2021-03-20T08:00:00.000Z',
  '2021-03-21T08:00:00.000Z',
  '2021-03-22T08:00:00.000Z',
  '2021-03-23T08:00:00.000Z',
  '2021-03-24T08:00:00.000Z',
]

const data = [31, 120, 10, 24, 51, 15, 10]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        
      <Sidebar/>

        <SimpleGrid flex={1} gap={4} minChildWidth="320px" alignItems="flex-start">
          <ChartDateTime title="Subscribers of the Week" categories={categories} data={data} />
          <ChartDateTime title="Openning Rate" categories={categories} data={data} />
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}