'use client'

import {
  BarChart,
  Bar,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Mon', gallery: 8, tagged: 4 },
  { name: 'Tue', gallery: 10, tagged: 7 },
  { name: 'Wed', gallery: 12, tagged: 10 },
  { name: 'Thu', gallery: 7, tagged: 6 },
  { name: 'Fri', gallery: 11, tagged: 9 },
  { name: 'Sat', gallery: 6, tagged: 2 },
  { name: 'Sun', gallery: 5, tagged: 3 },
]

const DailyBarChart = () => {
  return (
    <ResponsiveContainer width='100%'>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray='3 3' />
        {/* <XAxis dataKey='name' /> */}
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar
          dataKey='gallery'
          fill='#ff8976'
          name='Gallery Photos Count'
          barSize={15} // Makes the bars thinner
          radius={[10, 10, 0, 0]} // Rounds the top of the bars
        />
        <Bar
          dataKey='tagged'
          fill='#805ad5'
          name='Tagged Faces Count'
          barSize={15} // Makes the bars thinner
          radius={[10, 10, 0, 0]} // Rounds the top of the bars
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default DailyBarChart
