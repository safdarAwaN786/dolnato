import  { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import {
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  LineChart,
  CanvasRenderer,
]);

const EChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const rawData = [
      { Year: 1950, Country: 'Germany', Income: 1000 },
      { Year: 1960, Country: 'Germany', Income: 2000 },
      { Year: 1970, Country: 'Germany', Income: 3000 },
      { Year: 1980, Country: 'Germany', Income: 4000 },
      { Year: 1990, Country: 'Germany', Income: 5000 },
      { Year: 2000, Country: 'Germany', Income: 6000 },
      { Year: 1950, Country: 'France', Income: 1100 },
      { Year: 1960, Country: 'France', Income: 2100 },
      { Year: 1970, Country: 'France', Income: 3100 },
      { Year: 1980, Country: 'France', Income: 4100 },
      { Year: 1990, Country: 'France', Income: 5100 },
      { Year: 2000, Country: 'France', Income: 6100 },
    ];

    const option = {
      dataset: [
        {
          id: 'dataset_raw',
          source: rawData,
        },
        {
          id: 'dataset_since_1950_of_germany',
          fromDatasetId: 'dataset_raw',
          transform: {
            type: 'filter',
            config: {
              and: [
                { dimension: 'Year', gte: 1950 },
                { dimension: 'Country', '=': 'Germany' },
              ],
            },
          },
        },
        {
          id: 'dataset_since_1950_of_france',
          fromDatasetId: 'dataset_raw',
          transform: {
            type: 'filter',
            config: {
              and: [
                { dimension: 'Year', gte: 1950 },
                { dimension: 'Country', '=': 'France' },
              ],
            },
          },
        },
      ],
      
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        
        nameLocation: 'middle',
      },
      yAxis: {
        name: 'Income',
      },
      series: [
        {
          type: 'line',
          datasetId: 'dataset_since_1950_of_germany',
          showSymbol: false,
          encode: {
            x: 'Year',
            y: 'Income',
            itemName: 'Year',
            tooltip: ['Income'],
          },
        },
        {
          type: 'line',
          datasetId: 'dataset_since_1950_of_france',
          showSymbol: false,
          encode: {
            x: 'Year',
            y: 'Income',
            itemName: 'Year',
            tooltip: ['Income'],
          },
        },
      ],
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default EChartComponent;
