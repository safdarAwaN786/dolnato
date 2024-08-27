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

const LUXGauge = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      series: [
        {
          type: "gauge",
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 1000,
          splitNumber: 5,
          center: ["50%", "60%"], // Adjust this to control the vertical position
          radius: "90%", // Adjust this to control the size of the gauge
          itemStyle: {
            color: "orange",
            shadowColor: "rgba(0,138,255,0.45)",
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 2,
          },
          progress: {
            show: true,
            roundCap: true,
            width: 18,
          },
          pointer: {
            icon:
              "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
            length: "75%",
            width: 16,
            offsetCenter: [0, "5%"],
          },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 18,
            },
          },
          axisTick: {
            splitNumber: 2,
            lineStyle: {
              width: 2,
              color: "#999",
            },
          },
          splitLine: {
            length: 12,
            lineStyle: {
              width: 3,
              color: "#999",
            },
          },
          axisLabel: {
            distance: 30,
            interval: 1000,
            color: "#999",
            fontSize: 20,
          },
          title: {
            show: false,
          },
          detail: {
            backgroundColor: "#fff",
            borderColor: "#999",
            borderWidth: 2,
            width: "70%",
            lineHeight: 40,
            height: 33,
            borderRadius: 1,
            offsetCenter: [0, "50%"], // Adjust this to control the position of the detail box
            valueAnimation: true,
            formatter: function (value) {
              return "{value|" + value.toFixed(0) + "}{unit|km/h}";
            },
            rich: {
              value: {
                fontSize: 32,
                fontWeight: "bolder",
                color: "#777",
              },
              unit: {
                fontSize: 20,
                color: "#999",
                padding: [8, 0, 0, 5],
              },
            },
          },
          data: [
            {
              value: 600,
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

  return <div ref={chartRef} className="flex justify-center" style={{ width: "100%", height: "300px" }} />;
};

export default LUXGauge;
