import ReactApexChart from "react-apexcharts";

const ColumnChart = ({ completedTodosCount, todosCount }) => {
  const series = [
    {
      name: "Completed",
      data: [completedTodosCount, todosCount],
    },
  ];

  const options = {
    chart: {
      type: "bar",
    },
    colors: ["#F97316"],
    xaxis: {
      categories: ["Completed Tasks", "To do Tasks"],
    },
    tooltip: {
      y: {
        formatter: function (value, opts) {
          const sum = opts.series[0].reduce((a, b) => a + b, 0);
          const percent = (value / sum) * 100;
          return percent.toFixed(0) + "%";
        },
      },
    },
  };

  return (
    <div className="">
      <ReactApexChart options={options} type="bar" series={series} />;
    </div>
  );
};

export default ColumnChart;
