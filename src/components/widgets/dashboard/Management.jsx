import { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import {
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  TitleComponent,
} from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  BarChart,
  CanvasRenderer,
  TitleComponent,
]);

const ManagementStackedBar = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: function (params) {
          let tooltipContent = `<strong>${params[0].axisValue}</strong><br/>`;
          params.forEach((item) => {
            tooltipContent += `${item.seriesName}: ${item.data.toLocaleString()}<br/>`;
          });
          return tooltipContent;
        },
      },
      legend: {
        data: ['Core 1', 'Core 2', 'Core 3', 'Core 4', 'Core 5', 'Core 6'],
      },
      xAxis: {
        type: 'category',
        data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Core 1',
          type: 'bar',
          stack: 'total',
          data: [478991, 478991, 638655, 718487, 798319, 957982, 957982, 957982, 798319, 638655, 558823, 478991],
          itemStyle: {
            color: '#5470C6', // Color for Core 1
          },
        },
        {
          name: 'Core 2',
          type: 'bar',
          stack: 'total',
          data: [598739, 598739, 798319, 898109, 997898, 1197478, 1197478, 1197478, 997898, 798319, 698529, 598739],
          itemStyle: {
            color: '#91CC75', // Color for Core 2
          },
        },
        {
          name: 'Core 3',
          type: 'bar',
          stack: 'total',
          data: [798319, 798319, 1064425, 1197478, 1330531, 1596637, 1596637, 1596637, 1330531, 1064425, 931372, 798319],
          itemStyle: {
            color: '#EE6666', // Color for Core 3
          },
        },
        {
          name: 'Core 4',
          type: 'bar',
          stack: 'total',
          data: [598739, 598739, 798319, 898109, 997898, 1197478, 1197478, 1197478, 997898, 798319, 698529, 598739],
          itemStyle: {
            color: '#73C0DE', // Color for Core 4
          },
        },
        {
          name: 'Core 5',
          type: 'bar',
          stack: 'total',
          data: [598739, 598739, 798319, 898109, 997898, 1197478, 1197478, 1197478, 997898, 798319, 698529, 598739],
          itemStyle: {
            color: '#FAC858', // Color for Core 5
          },
        },
        {
          name: 'Core 6',
          type: 'bar',
          stack: 'total',
          data: [478991, 478991, 638655, 718487, 798319, 957982, 957982, 957982, 798319, 638655, 558823, 478991],
          itemStyle: {
            color: '#9A60B4', // Color for Core 6
          },
        },
      ],
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "750px", height: "450px" }} />;
};

export default ManagementStackedBar;
