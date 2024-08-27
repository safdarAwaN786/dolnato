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

const CO2Gauge = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      series: [
        {
          type: "gauge",
          min: 0, // Starting point of the gauge
          max: 1000, // Ending point of the gauge
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.1, '#5555fc'],  // 16 to 18 Degrees
                [0.8, '#70cd70'],    // 18 to 24 Degrees
                [1, '#ff5f5f']       // 24 to 32 Degrees
              ],
            },
          },
          pointer: {
            itemStyle: {
              color: "auto",
            },
          },
          axisTick: {
            distance: -30,
            length: 0,
            lineStyle: {
              color: "#fff",
              width: 10,
            },
          },
          splitLine: {
            distance: -30,
            length: 10,
            lineStyle: {
              color: "black",
              width: 0,
            },
          },
          axisLabel: {
            color: "inherit",
            distance: -15,
            fontSize: 16,
            formatter: function (value) {
              // Ensure that labels for 16, 18, 24, and 32 are shown
              if ([0, 100, 800, 1000].includes(value)) {
                return `${value}`;
              }
              return "";
            },
          },
          detail: {
            valueAnimation: true,
            formatter: "{value} ppm",
            color: "inherit",
            fontSize: 22,
          },
          data: [
            {
              value: 620, // Current temperature value
            },
          ],
        },
      ],
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "300px" }} />;
};

export default CO2Gauge;
