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

const ModalOneChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const rawData = [
      { Number: "Jan", Consumption: 1085492, Target: 1348315 },
      { Number: "Feb", Consumption: 1085492, Target: 1348315 },
      { Number: "Mar", Consumption: 2269665, Target: 2471910 },
      { Number: "Apr", Consumption: 2861751, Target: 2921348 },
      { Number: "May", Consumption: 3453838, Target: 3258427 },
      { Number: "June", Consumption: 4638011, Target: 4382022 },
      { Number: "July", Consumption: 4638011, Target: 4719101 },
      { Number: "Aug", Consumption: 4638011, Target: 4719101 },
      { Number: "Sept", Consumption: 3453838, Target: 4044944 },
      { Number: "Oct", Consumption: 2269665, Target: 2921348 },
      { Number: "Nov", Consumption: 1677579, Target: 1348315 },
      { Number: "Dec", Consumption: 1085492, Target: 1348315 },
    ];

    const option = {
      chartArea: {
        left: 60, // Increase this value to give more space for y-axis labels
        top: 10,
        width: "85%", // Adjust width accordingly
        height: "80%",
      },
      dataset: {
        source: rawData,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // type: 'shadow' // Optionally change the axis pointer to shadow type
        },
        formatter: function (params) {
          const [consumption, target] = params;
          return `
            <strong>${consumption.name}</strong><br/>
            Consumption: ${consumption.data.Consumption.toLocaleString()}<br/>
            Target: ${target.data.Target.toLocaleString()}
          `;
        },
      },
      legend: {
        orient: "horizontal",
        bottom: 0, // Position the legend at the bottom of the chart
        left: "center",
        data: ["Consumption", "Target"], // Legend labels
      },
      xAxis: {
        type: "category",
        axisLabel: {
          rotate: 0, // Keep labels horizontal
          show: true, // Ensure labels are displayed
        },
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 6000000,
        name: "Energy",
        axisLabel: {
          rotate: 0, // Keep y-axis labels horizontal
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
          name: "Target",
          encode: { x: "Number", y: "Target" },
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

  return <div ref={chartRef} style={{ width: "700px", height: "450px" }} />;
};

export default ModalOneChart;
