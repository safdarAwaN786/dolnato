import { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import {
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  TitleComponent,
} from "echarts/components";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  PieChart,
  CanvasRenderer,
  TitleComponent,
]);

const EnergySourceChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const data = [
      { value: 24, name: 'DEWA' },
      { value: 30, name: 'Solar' },
      { value: 6, name: 'Generator' },
    ];

    const totalValue = data.reduce((acc, item) => acc + item.value, 0);

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return `${params.name}: ${params.value} MW (${params.percent}%)`;
        },
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Energy Source',
          type: 'pie',
          radius: ['30%', '60%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: false,  // Prevent any label from showing on hover
            }
          },
          labelLine: {
            show: false
          },
          data: data
        }
      ],
      graphic: {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: `Total\n${totalValue} MW`,
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          fill: '#000',
        }
      }
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default EnergySourceChart;
