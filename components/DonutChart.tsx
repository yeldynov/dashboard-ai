'use client'

import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const data = [
  { name: 'Search', value: 100 },
  { name: 'Detection', value: 120 },
  { name: 'Storage mb', value: 500 },
]

const COLORS = ['#4c82f8', '#ff8976', '#f9be59']

interface RenderLabelProps {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  index: number
}

const renderLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  index,
}: RenderLabelProps) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${data[index].value}`}
    </text>
  )
}

const DonutChart = () => {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx={150}
        cy={100}
        innerRadius={40}
        outerRadius={100}
        fill='#8884d8'
        paddingAngle={5}
        dataKey='value'
        labelLine={false}
        label={renderLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  )
}

export default DonutChart
