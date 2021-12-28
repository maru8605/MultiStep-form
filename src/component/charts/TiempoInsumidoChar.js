import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { optionLabel } from '../../utils/data';
import { useRecoilValue } from 'recoil';
import { getDataCharts } from '../../atoms/responses';
import { tiempoInsumidoOptions } from '../../data/form';

const TiempoInsumidoChar = () => {
  const chartData = useRecoilValue(getDataCharts);
  const data = chartData.tiempoInsumido;

  const serieData = Object.keys(data).map((key) => {
    return {
      name: optionLabel(key, tiempoInsumidoOptions),
      y: data[key],
    };
  });

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      text: 'Tiempo insumido en la prestación de servicios.',
      align: 'left',
      verticalAlign: 'top',
      y: 50,
      style: {
        fontSize: '22px',
      },
    },
    colors: ['#3590f8', '#43f816', '#fa5c1e', '#7e1cee', '#fbff00'],

    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        colorByPoint: true,
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white',
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%',
      },
    },
    series: [
      {
        name: 'Calidad de las instalaciones del establecimiento',
        colorByPoint: true,
        type: 'pie',
        innerSize: '50%',
        data: serieData,
      },
    ],
    credits: {
      enabled: false,
    },
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TiempoInsumidoChar;
