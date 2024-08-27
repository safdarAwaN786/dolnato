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

const ModalSixChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      dataset: [
        {
          dimensions: ["name", "score1", "score2"],
          source: [
            ["January", 1348315, 1085492],
            ["February", 1348315, 1085492],
            ["March", 2471910, 2269665],
            ["April", 2921348, 2861751],
            ["May", 3258427, 3453837.8],
            ["June", 4382022, 4638011],
            ["July", 4719101, 4638011],
            ["August", 4719101, 4638011],
            ["September", 4044944, 3453838],
            ["October", 2921348, 2269665],
            ["November", 1348315, 1677579],
            ["December", 1348315, 1085492],
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
          name: "Demand Budget",
          encode: { x: "name", y: "score1" },
          barWidth: 10,
          itemStyle: {
            color: "#6e75d8", // Color for the first set of bars
          },
          barGap: "30%", // Adjust spacing between the bars
        },
        {
          type: "bar",
          name: "Actual Demand",
          encode: { x: "name", y: "score2" },
          barWidth: 10,
          itemStyle: {
            color: "#d86e6e", // Color for the second set of bars
          },
          barGap: "30%", // Adjust spacing between the bars
        },
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // type: 'shadow', // Use shadow pointer to highlight bars
        },
        formatter: function (params) {
          const [score1, score2] = params;
          console.log("PARAMS", params)
          return `
            <strong>${score1.axisValue}</strong><br/>
            ${score1.seriesName}: ${score1.data[1].toLocaleString()}<br/>
            ${score2.seriesName}: ${score2.data[2].toLocaleString()}
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

export default ModalSixChart;
