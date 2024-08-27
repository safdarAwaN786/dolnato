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

const ModalThreeChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      dataset: [
        {
          dimensions: ["name", "score"],
          source: [
            ["January", 1085492],
            ["February", 1085492],
            ["March", 2269665],
            ["April", 2861751],
            ["May", 3453838],
            ["June", 4638011],
            ["July", 4638011],
            ["August", 4638011],
            ["September", 3453838],
            ["October", 2269665],
            ["November", 1677579],
            ["December", 1085492],
          ],
        },
      ],
      xAxis: {
        type: "category",
        axisLabel: { interval: 0, rotate: 30 },
      },
      yAxis: { 
        axisLabel: { rotate: 0 }
      },
      series: [
        {
          type: "bar",
          encode: { x: "name", y: "score" },
          barWidth: 30,
          barCategoryGap: '30%',  // Increase spacing between bars
          barGap: '0%', 
          itemStyle: {
            color: '#5774d5',    // Set the color of the bars
          },
        },
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // type: 'shadow', // Highlight the bar when hovering
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

export default ModalThreeChart;
