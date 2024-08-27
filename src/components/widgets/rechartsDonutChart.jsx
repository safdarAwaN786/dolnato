import  { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

// Sample data
const data = [
  { name: 'January', value: 3552518.28, fill:"blue"},
  { name: 'February', value: 3552518.28, fill : "#ff6200"},
  { name: 'March', value: 4736691.04, fill : "green"},
  { name: 'April', value: 5328777.42, fill : "#ff0000"},
  { name: 'May', value: 5920863.8, fill : "brown"},
  { name: 'June', value: 7105036.56, fill : "#900c9c"},
  { name: 'July', value: 7105036.56, fill : "#1b6118"},
  { name: 'August', value: 7105036.56, fill : "#583209"},
  { name: 'September', value: 5920863.8, fill : "#8d0d82"},
  { name: 'October', value: 4736691.04, fill:"blue"},
  { name: 'November', value: 4144604.66, fill : "#ff6200"},
  { name: 'December', value: 3552518.28, fill : "green"},
];

// Custom render function for the active shape
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, value, name,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${name}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`${value}kWh`}
      </text>
    </g>
  );
};

const CustomPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={handlePieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
