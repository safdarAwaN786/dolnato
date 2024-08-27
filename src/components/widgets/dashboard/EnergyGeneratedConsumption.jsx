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

const EnergyGeneratedConsumption = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
     
      dataset: [
        {
          dimensions: ["name", "score1", "score2"],
          source: [
            ["January", 3552518.28, 2220323],
            ["February", 3552518.28, 2220323],
            ["March", 4736691.04, 2467026],
            ["April", 5328777.42, 2467026],
            ["May", 5920863.8, 2343675],
            ["June", 7105036.56, 2578042],
            ["July", 7105036.56, 2713729],
            ["August", 7105036.56, 2713729],
            ["September", 5920863.8, 2467026],
            ["October", 4736691.04, 2467026],
            ["November", 4144604.66, 2467026],
            ["December", 3552518.28, 2109307],
          ],
        },
      ],
      xAxis: [
        {
          type: "category",
          axisLabel: { interval: 0, rotate: 30 },
        },
      ],
      yAxis: {},
      series: [
        {
          type: "bar",
          name: "Energy Generation",
          encode: { x: "name", y: "score1" },
          barWidth: 10,
          itemStyle: {
            color: "#6e75d8", // Color for the first set of bars
          },
          barGap: "30%", // Adjust spacing between the bars
        },
        {
          type: "bar",
          name: "Energy Consumption",
          encode: { x: "name", y: "score2" },
          barWidth: 10,
          itemStyle: {
            color: "#d86e6e", // Color for the second set of bars
          },
          barGap: "30%", // Adjust spacing between the bars
        },
      ],
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ['Energy Generation', 'Energy Consumption'], // Custom legend text
        bottom: 0, // Position the legend at the bottom of the chart
        textStyle: {
          color: '#333', // Customize legend text color
        },
        margin: [20, 0, 0, 0], // Add padding to the bottom of the legend
      },
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default EnergyGeneratedConsumption;
