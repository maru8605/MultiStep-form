import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { optionLabel } from '../../utils/data';
import { useRecoilValue } from 'recoil';
import { getDataCharts } from '../../atoms/responses';
import { nRelatosNuevosOptions } from '../../data/form';

const NumRelatosNuevosChar = () => {
  const chartData = useRecoilValue(getDataCharts);
  const data = chartData.nRelatosNuevos;
  console.log(data);
  const serieData = Object.keys(data).map((key) => {
    return {
      name: optionLabel(key, nRelatosNuevosOptions),
      y: data[key],
    };
  });

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Áreas donde se ha relatado lo ocurrido en más de una oportunidad',
      align: 'left',
      style: {
        fontSize: '22px',
      },
    },
    colors: ['#3590f8', '#43f816', '#fa5c1e', '#7e1cee', '#fbff00'],
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Cantidad de veces',
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: '{point.y:1f}',
    },
    series: [
      {
        name: 'Área',
        colorByPoint: true,
        data: serieData,
      },
    ],
    credits: {
      enabled: false,
    },
    dataLabels: {
      enabled: true,
      rotation: -90,
      inside: true,
      color: '#FFFFFF',
      align: 'right',
      format: '{point.y:1f}', // one decimal
      y: 10, // 10 pixels down from the top
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif',
      },
    },
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default NumRelatosNuevosChar;
