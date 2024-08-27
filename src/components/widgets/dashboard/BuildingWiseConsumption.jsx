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

const BuildingWiseConsumption = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      color: [
        '#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE', '#3BA272', 
        '#FC8452', '#9A60B4', '#EA7CCC', '#FFA07A', '#20B2AA', '#FF6347'
      ], 
      tooltip: {
        trigger: "item", 
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
          data: ["Core 1", "Core 2", "Core 3", "Core 4", "Core 5", "Core 6"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "January",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [
            478991.228764045, 598739.035955056, 798318.714606742, 598739.035955056, 598739.035955056, 478991.228764045
          ],
        },
        {
          name: "February",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [
            478991.228764045, 598739.035955056, 798318.714606742, 598739.035955056, 598739.035955056, 478991.228764045
          ],
        },
        {
          name: "March",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [
            638654.971685393, 798318.714606742, 1064424.95280899, 798318.714606742, 798318.714606742, 638654.971685393
          ],
        },
        {
          name: "April",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [
            718486.843146067, 898108.553932584, 1197478.07191011, 898108.553932584, 898108.553932584, 718486.843146067
          ],
        },
        {
          name: "May",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [
            798318.714606742, 997898.393258427, 1330531.19101124, 997898.393258427, 997898.393258427, 798318.714606742
          ],
        },
        {
          name: "June",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [
            957982.45752809, 1197478.07191011, 1596637.42921348, 1197478.07191011, 1197478.07191011, 957982.45752809
          ],
        },
        {
          name: "July",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [
            957982.45752809, 1197478.07191011, 1596637.42921348, 1197478.07191011, 1197478.07191011, 957982.45752809
          ],
        },
        {
          name: "August",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [
            957982.45752809, 1197478.07191011, 1596637.42921348, 1197478.07191011, 1197478.07191011,957982.45752809
          ],
        },
        {
          name: "September",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [
            798318.714606742, 997898.393258427, 1330531.19101124, 997898.393258427, 997898.393258427, 798318.714606742
          ],
        },
        {
          name: "October",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [
            638654.971685393, 798318.714606742, 1064424.95280899, 798318.714606742, 798318.714606742, 638654.971685393
          ],
        },
        {
          name: "November",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [
            558823.100224719, 698528.875280899, 931371.833707865, 698528.875280899, 698528.875280899, 558823.100224719
          ],
        },
        {
          name: "December",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [
            478991.228764045, 598739.035955056, 798318.714606742, 598739.035955056, 598739.035955056, 478991.228764045
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

  return <div ref={chartRef} style={{ width: "100%", height: "450px" }} />;
};

export default BuildingWiseConsumption;
