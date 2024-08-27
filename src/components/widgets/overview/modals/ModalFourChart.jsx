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

const ModalFourChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
        xAxis: {
          type: 'category',
          data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          axisLabel: {
            interval: 0,  // Display all labels
            rotate: 45,   // Rotate labels to avoid overlap
          },
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [3552518.28, 3552518.28, 4736691.04, 5328777.42, 5920863.8, 7105036.56, 7105036.56, 7105036.56, 5920863.8, 4736691.04, 4144604.66, 3552518.28],
            type: 'line',
            itemStyle : {
                color : "#fd1616"
            } 
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line' // This highlights the specific point on the line chart
          },
          formatter: function (params) {
            const data = params[0];
            return `
              <strong>${data.axisValue}</strong><br/>
              ${data.data.toLocaleString()} kWh
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

export default ModalFourChart;
