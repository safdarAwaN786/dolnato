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
        data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      },
      xAxis: {
        type: 'category',
        data: ['Core 1', 'Core 2', 'Core 3', 'Core 4', 'Core 5', 'Core 6'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'January',
          type: 'bar',
          stack: 'total',
          data: [478991, 598739,	798319,	598739,	598739,	478991],
          itemStyle: {
            color: '#FF5733', // Color for Core 1
          },
        },
        {
          name: 'February',
          type: 'bar',
          stack: 'total',
          data: [478991, 598739,	798319,	598739,	598739, 478991],
          itemStyle: {
            color: '#33FF57', // Color for Core 2
          },
        },
        {
          name: 'March',
          type: 'bar',
          stack: 'total',
          data: [638655, 798319, 1064425,	798319,	798319, 638655],
          itemStyle: {
            color: '#3357FF', // Color for Core 3
          },
        },
        {
          name: 'April',
          type: 'bar',
          stack: 'total',
          data: [718487, 898109, 1197478, 898109, 898109, 718487],
          itemStyle: {
            color: '#FF33A1', // Color for Core 4
          },
        },
        {
          name: 'May',
          type: 'bar',
          stack: 'total',
          data: [798319, 997898, 1330531,	997898,	997898,	798319],
          itemStyle: {
            color: '#FFBD33', // Color for Core 5
          },
        },
        {
          name: 'June',
          type: 'bar',
          stack: 'total',
          data: [957982,	1197478,	1596637,	1197478,	1197478,	957982],
          itemStyle: {
            color: '#33FFBD', // Color for Core 6
          },
        },
        {
          name: 'July',
          type: 'bar',
          stack: 'total',
          data: [957982,	1197478,	1596637,	1197478,	1197478,	957982],
          itemStyle: {
            color: '#5733FF', // Color for Core 6
          },
        },
        {
          name: 'August',
          type: 'bar',
          stack: 'total',
          data: [957982,	1197478,	1596637,	1197478,	1197478,	957982],
          itemStyle: {
            color: '#33A1FF', // Color for Core 6
          },
        },
        {
          name: 'September',
          type: 'bar',
          stack: 'total',
          data: [798319,	997898,	1330531, 997898,	997898,	798319],
          itemStyle: {
            color: '#A1FF33', // Color for Core 6
          },
        },
        {
          name: 'October',
          type: 'bar',
          stack: 'total',
          data: [638655,	798319,	1064425,	798319,	798319,	638655],
          itemStyle: {
            color: '#FF5733', // Color for Core 6
          },
        },
        {
          name: 'November',
          type: 'bar',
          stack: 'total',
          data: [558823,	698529,	931372,	698529,	698529,	558823],
          itemStyle: {
            color: '#8D33FF', // Color for Core 6
          },
        },
        {
          name: 'Decembers',
          type: 'bar',
          stack: 'total',
          data: [478991,	598739,	798319,	598739,	598739,	478991],
          itemStyle: {
            color: '#FF3380', // Color for Core 6
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
