import React from "react";
import Chart from "react-apexcharts";
function CampaignChartApex() {
  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];
  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return ` <div class="bg-white p-4">
          <div class="text-red-400">RED</div>
        </div>`;
      },
    },
  };
  return (
    <div className=" h-[290px] overflow-y-hidden">
      <Chart options={options} series={series} type="area" height={"100%"} />
    </div>
  );
}

export default CampaignChartApex;
