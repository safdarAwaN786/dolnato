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

const EnergyConsumption = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: "item", // Changed from "axis" to "item"
        axisPointer: {
          type: "shadow",
        },
        formatter: function (params) {
          return `${params.seriesName}: ${params.value}`;
        },
      },
      legend: {},
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Core 1",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [478991.228764045, 478991.228764045, 638654.971685393, 718486.843146067, 798318.714606742, 957982.45752809, 957982.45752809, 957982.45752809, 798318.714606742, 638654.971685393, 558823.100224719, 478991.228764045],
        },
        {
          name: "Core 2",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [598739.035955056, 598739.035955056, 798318.714606742, 898108.553932584, 997898.393258427, 1197478.07191011, 1197478.07191011, 1197478.07191011, 997898.393258427, 798318.714606742, 698528.875280899, 598739.035955056],
        },
        {
          name: "Core 3",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [798318.714606742, 798318.714606742, 1064424.95280899, 1197478.07191011, 1330531.19101124, 1596637.42921348, 1596637.42921348, 1596637.42921348, 1330531.19101124, 1064424.95280899, 931371.833707865, 798318.714606742],
        },
        {
          name: "Core 4",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [598739.035955056, 598739.035955056, 798318.714606742, 898108.553932584, 997898.393258427, 1197478.07191011, 1197478.07191011, 1197478.07191011, 997898.393258427, 798318.714606742, 698528.875280899, 598739.035955056],
        },
        {
          name: "Core 5",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          barWidth : 50,
          data: [598739.035955056, 598739.035955056, 798318.714606742, 898108.553932584, 997898.393258427, 1197478.07191011, 1197478.07191011, 1197478.07191011, 997898.393258427, 798318.714606742, 698528.875280899, 598739.035955056],
        },
        {
          name: "Core 6",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [478991.228764045, 478991.228764045, 638654.971685393, 718486.843146067, 798318.714606742, 957982.45752809, 957982.45752809, 957982.45752809, 798318.714606742, 638654.971685393, 558823.100224719, 478991.228764045],
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

export default EnergyConsumption;
