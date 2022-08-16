import { ChartDateTime } from '../../components/Chart/ChartDateTime';

export function SubscribersPerWeek() {
  const categories = [
    '2021-03-18T06:00:00.000Z',
    '2021-03-19T06:00:00.000Z',
    '2021-03-20T06:00:00.000Z',
    '2021-03-21T06:00:00.000Z',
    '2021-03-22T06:00:00.000Z',
    '2021-03-23T06:00:00.000Z',
    '2021-03-24T06:00:00.000Z',
  ];

  const data = [31, 120, 10, 24, 51, 15, 10];

  return (
    <ChartDateTime
      title="Subscribers of the Week"
      categories={categories}
      data={data}
    />
  );
}
