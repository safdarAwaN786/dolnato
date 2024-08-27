import { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import {
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  LineChart,
  CanvasRenderer,
]);

const EnergySpendBudgetChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const rawData = [
      { Number: "January", Consumption: 483044, Budget: 1348315 },
      { Number: "February", Consumption: 483044, Budget: 600000 },
      { Number: "March", Consumption: 1010001, Budget: 1100000 },
      { Number: "April", Consumption: 1273479, Budget: 1300000 },
      { Number: "May", Consumption: 1536958, Budget: 1450000 },
      { Number: "June", Consumption: 2063915, Budget: 1950000 },
      { Number: "July", Consumption: 2063915, Budget: 2100000 },
      { Number: "August", Consumption: 2063915, Budget: 2100000 },
      { Number: "September", Consumption:  1536958, Budget: 1800000 },
      { Number: "October", Consumption: 1010001, Budget: 1300000 },
      { Number: "November", Consumption: 746523, Budget: 600000 },
      { Number: "December", Consumption: 483044, Budget: 600000 },
    ];

    const option = {
      dataset: {
        source: rawData,
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        orient: "horizontal",
        bottom: 0, // Position the legend at the bottom of the chart
        left: "center",
        data: ["Consumption", "Budget"], // Legend labels
      },
      xAxis: {
        type: "category",
        axisLabel: {
          rotate: 45, // Rotate the labels to fit better
        },
        interval: 0, // Show all labels
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 3000000,
        axisLabel: {
          rotate: 0,
        },
      },
      series: [
        {
          type: "line",
          name: "Consumption",
          encode: { x: "Number", y: "Consumption" },
          showSymbol: false,
        },
        {
          type: "line",
          name: "Budget",
          encode: { x: "Number", y: "Budget" },
          showSymbol: false,
        },
      ],
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "450px" }} />;
};

export default EnergySpendBudgetChart;
