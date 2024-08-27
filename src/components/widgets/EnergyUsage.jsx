
import ReactEcharts from 'echarts-for-react';

const MyPieCharts = () => {
  const datas = [
    [
      { name: 'Open Plan Offices ', value: 24162784 },
      { name: 'General Circulation ', value: 9475200 },
      { name: 'Individual Offices ', value: 5351811 },
      { name: 'Meeting Rooms ', value: 4356781 },
      { name: 'Car Park ', value: 2366720 },
      { name: 'Staircases ', value: 1941718 },
      { name: 'Auditorium ', value: 1468374 },
      { name: 'Prayer Rooms ', value: 1468374 },
      { name: 'Gym ', value: 1468374 },
      { name: 'Library ', value: 1468374 },
      { name: 'Toilets ', value: 1420032 },
      { name: 'MEP Room ', value: 1420032 },
      { name: 'Lift Shaft ', value: 946688 },
      { name: 'Landscape Internal ', value: 473344 },
      { name: 'Landscape External ', value: 473344 },
      { name: 'External Lighting ', value: 473344 },
      { name: 'Nursery ', value: 473344 },
    ],
    
  ];

  const getOption = () => ({
    title: {
     
      left: 'center',
      textStyle: {
        color: '#999',
        fontWeight: 'normal',
        fontSize: 14
      }
    },
    series: datas.map((data, idx) => {
      const top = idx * 33.3;
      return {
        type: 'pie',
        radius: [100, 180],
        top: `${top}%`,
        height: '100%',
        left: 'center',
        width: 1000,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        label: {
          alignTo: 'none',
          formatter: '{b}({d}%)\n{c} ',
          minMargin: 30,
          fontSize : 16,
          edgeDistance: 10,
          lineHeight: 20,
          
        },
        labelLine: {
          length: 50,
          length2: 20,
          maxSurfaceAngle: 100
        },
        labelLayout: (params) => {
          const isLeft = params.labelRect.x < 200; // Assuming chart width is 400px
          const points = params.labelLinePoints;
          points[2][0] = isLeft
            ? params.labelRect.x
            : params.labelRect.x + params.labelRect.width;
          return {
            labelLinePoints: points
          };
        },
        data: data
      };
    })
  });

  return (
    <ReactEcharts
      option={getOption()}
      style={{ height: '700px', width: '100%' }}
    />
  );
};

export default MyPieCharts;
