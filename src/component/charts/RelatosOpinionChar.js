import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { optionLabel } from '../../utils/data';
import { useRecoilValue } from 'recoil';
import { getDataCharts } from '../../atoms/responses';
import { nrelatosOpinionOptions } from '../../data/form';

const RelatosOpinionChar = () => {
  const chartData = useRecoilValue(getDataCharts);
  const data = chartData.nrelatosOpinion;

  const serieData = Object.keys(data).map((key) => {
    return {
      name: optionLabel(key, nrelatosOpinionOptions),
      y: data[key],
    };
  });

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: '¿Consideraba que era necesario volver a relatarlo?',
      align: 'left',
      style: {
        fontSize: '22px',
      },
    },
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
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    series: [
      {
        name: 'Número de visitas al polo (último año)',
        colorByPoint: true,
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

export default RelatosOpinionChar;
