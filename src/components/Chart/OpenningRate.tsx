import { ChartDateTime } from './ChartDateTime';

export function OpenningRate() {
  const categories = [
    '2021-03-18T06:00:00.000Z',
    '2021-03-19T06:00:00.000Z',
    '2021-03-20T06:00:00.000Z',
    '2021-03-21T06:00:00.000Z',
    '2021-03-22T06:00:00.000Z',
    '2021-03-23T06:00:00.000Z',
    '2021-03-24T06:00:00.000Z',
  ];

  const data = [10, 12, 50, 124, 11, 150, 10];

  return (
    <ChartDateTime title="Openning Rate" categories={categories} data={data} />
  );
}
