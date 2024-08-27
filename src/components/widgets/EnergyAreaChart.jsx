import  { useEffect, useRef } from "react";
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

const EChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      dataset: [
        {
          dimensions: ["name", "age", "profession", "score", "date"],
          source: [
            ["Hannah Krause", 41, "Engineer", 314, "2011-02-12"],
            ["Zhao Qian", 20, "Teacher", 351, "2011-03-01"],
            ["Jasmin Krause", 52, "Musician", 287, "2011-02-14"],
            ["Li Lei", 37, "Teacher", 219, "2011-02-18"],
            ["Karle Neumann", 25, "Engineer", 253, "2011-04-02"],
            ["Adrian Groß", 19, "Teacher", "-", "2011-01-16"],
            ["Mia Neumann", 71, "Engineer", 165, "2011-03-19"],
            ["Böhm Fuchs", 36, "Musician", 318, "2011-02-24"],
            ["Han Meimei", 67, "Engineer", 366, "2011-03-12"],
          ],
        },
        {
          transform: {
            type: "sort",
            config: { dimension: "score", order: "desc" },
          },
        },
      ],
      xAxis: {
        type: "category",
        axisLabel: { interval: 0, rotate: 30 },
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          encode: { x: "name", y: "score" },
          datasetIndex: 1,
        },
        {
          type: "bar",
          encode: { x: "name", y: "score" },
          datasetIndex: 1,
        },
      ],
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default EChartComponent;
