import { theme } from "@chakra-ui/react";

import { Props as ApexOptionsProps } from 'react-apexcharts'
import { ChartBox } from "../ChartBox";

interface ChartDateTimeProps {
  title: string
  categories: string[]
  data: any[]
}



export function ChartDateTime({title, categories, data}: ChartDateTimeProps) {
  
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
      categories: categories
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
    { name: 'series1', data }
  ]

  return (
    <ChartBox title={title} options={options} series={series} />
  );
}
