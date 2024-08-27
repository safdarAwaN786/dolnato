import React from 'react';
import { PieChart, Pie, Cell, Text, Tooltip } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 600, color: '#aa9f95' },
  { name: 'B', value: 2000, color: '#c1a081' },
  { name: 'C', value: 2000, color: '#d29c6a' },
  { name: 'D', value: 2000, color: '#d49051' },
  { name: 'E', value: 2000, color: '#cd7a2c' },
];
const cx = 100;
const cy = 100;
const iR = 60;
const oR = 100;
const totalValue = data.reduce((acc, cur) => acc + cur.value, 0);

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" key="circle" />,
    <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="none" fill={color} key="path" />,
  ];
};

const renderLabels = (data, cx, cy, iR, oR) => {
  let cumulativeValue = 0;

  return data.map((entry, index) => {
    cumulativeValue += entry.value;
    const percentage = cumulativeValue / totalValue;
    const angle = 180 * (1 - percentage);
    const radius = (iR + oR) / 2;
    const x = cx + radius * Math.cos(-RADIAN * angle);
    const y = cy + radius * Math.sin(-RADIAN * angle);

    return (
      <Text
        x={x}
        y={y}
        fill="#000"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        key={`label-${index}`}
        fontSize={10}
      >
        {cumulativeValue}
      </Text>
    );
  });
};

export default function LuxGuage() {
  const value = 600;

  return (
    <PieChart width={220} height={150}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#8884d8"
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      {needle(value, data, cx, cy, iR, oR, '#222222')}
      {renderLabels(data, cx, cy, iR, oR)}
      <Tooltip />
      <text
          x={cx}
          y={120}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: '16px', fontWeight: 'bold' }}
        >
          {`${value} kWh`}
        </text>
    </PieChart>
  );
}
