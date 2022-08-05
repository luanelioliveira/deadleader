import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Props as ApexOptionsProps } from 'react-apexcharts'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options: ApexOptionsProps = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T08:00:00.000Z',
      '2021-03-19T08:00:00.000Z',
      '2021-03-20T08:00:00.000Z',
      '2021-03-21T08:00:00.000Z',
      '2021-03-22T08:00:00.000Z',
      '2021-03-23T08:00:00.000Z',
      '2021-03-24T08:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacity: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  { name: 'series1', data: [31, 120, 10, 24, 51, 15, 10] }
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        
      <Sidebar/>
      
        <SimpleGrid flex={1} gap={4} minChildWidth={320} alignItems="flex-start">
          <Box p={8} bg="gray.800" borderRadius={8} pb={4}>
            <Text fontSize="lg" mb={4}> Subscribers of the Week</Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box p={8} bg="gray.800" borderRadius={8} pb={4}>
            <Text fontSize="lg" mb={4}> Openning Rate</Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}