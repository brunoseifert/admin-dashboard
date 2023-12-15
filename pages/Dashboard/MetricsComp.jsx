import ReactApexChart from 'react-apexcharts';

const MetricsComp = () => {
  const series = [44, 55, 67, 83];

  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },

    labels: ['Mouse', 'Monitor', 'Headset', 'Teclado'],
    colors: ['#1abc9c', '#3498db', '#f1c40f', '#e74c3c'],
    legend: {
      show: true,
      floating: true,
      fontSize: '12px',
      position: 'left',
      offsetX: 2,
      offsetY: 4,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName, opts) {
        return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <>
      <div id="card" className=" w-[290px] rounded-sm">
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            height={320}
          />
        </div>
      </div>
    </>
  );
};

export default MetricsComp;
