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

const ModalFiveChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      dataset: {
        source: [
          ["amount", "product"],
          [1348315, "January"],
          [1348315, "February"],
          [2471910, "March"],
          [2921348, "April"],
          [3258427, "May"],
          [4382022, "June"],
          [4719101, "July"],
          [4719101, "August"],
          [4044944, "September"],
          [2921348, "October"],
          [1348315, "November"],
          [1348315, "December"],
        ],
      },
      grid: { containLabel: true },
      xAxis: {},
      yAxis: { type: "category" },

      series: [
        {
          type: "bar",
          encode: {
            // Map the "amount" column to X axis.
            x: "amount",
            // Map the "product" column to Y axis
            y: "product",
          },
          itemStyle: {
            color: "#5774d5", // Set the color of the bars
          },
        },
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // type: 'shadow', // Use shadow pointer to highlight bars
        },
        formatter: function (params) {
          const data = params[0];
          return `
            <strong>${data.data[1]}</strong><br/>
            ${data.data[0].toLocaleString()} kWh
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

  return <div ref={chartRef} style={{ width: "650px", height: "450px" }} />;
};

export default ModalFiveChart;
