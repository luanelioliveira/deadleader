import { Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface ChartBoxProps {
  title: string
  options: ApexCharts.ApexOptions
  series: ApexAxisChartSeries
}

export function ChartBox({title, options, series}: ChartBoxProps) {
  return (
    <Box bg="gray.800" borderRadius={8} p={[6, 8]} pb={4}>
      <Text fontSize="lg" mb={4}>{title}</Text>
      <Chart type="area" height={160} options={options} series={series} />
    </Box>
  );
}
