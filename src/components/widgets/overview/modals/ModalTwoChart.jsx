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

const ModalTwoChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      dataset: [
        {
          dimensions: ["name", "score"], 
          source: [
            ["January", 2220323],
            ["February", 2220323],
            ["March", 2467026],
            ["April", 2467026],
            ["May", 2343675],
            ["June", 2578042],
            ["July", 2713729],
            ["August", 2713729],
            ["September", 2467026],
            ["October", 2467026],
            ["November", 2467026],
            ["December", 2109307],
          ],
        },
      ],
      xAxis: {
        type: "category",
        axisLabel: { interval: 0, rotate: 50 },
      },
      yAxis: { 
        axisLabel: { rotate: 40 }
      },
      series: [
        {
          type: "bar",
          encode: { x: "name", y: "score" },
          barWidth: 30,
          barCategoryGap: '30%',  // Increase spacing between bars
          barGap: '0%', 
          itemStyle: {
            color: '#95b25c',    // Set the color of the bars
          },
        },
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // type: 'shadow' // Use shadow pointer to highlight bars
        },
        formatter: function (params) {
          const data = params[0];
          return `
            <strong>${data.name}</strong><br/>
            ${data.data[1].toLocaleString()} kWh
          `;
        },
      },
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "700px", height: "400px" }} />;
};

export default ModalTwoChart;
