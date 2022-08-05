import { Flex, SimpleGrid, theme } from "@chakra-ui/react";

import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { SubscribersPerWeek } from "../../../components/Chart/SubscribersPerWeek";
import { OpenningRate } from "../../../components/Chart/OpenningRate";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <Sidebar/>
        <SimpleGrid flex={1} gap={4} minChildWidth="320px" alignItems="flex-start">
          <SubscribersPerWeek />
          <OpenningRate />
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}