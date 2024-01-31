import { Select } from "antd";
import { Chart as ChartJS, Filler, ScriptableContext } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(Filler);
function CampaignChart() {
  return (
    <div className="w-full h-[290px] p-4 ">
      <div className="flex justify-between">
        <div className="flex gap-x-2">
          <Select placeholder="Email" size="small" />
          <Select placeholder="SMS" size="small" />
        </div>
        <div className="flex gap-x-2">
          <Select placeholder="No Comparison" size="small" />
          <Select placeholder="Last 7 days" size="small" />
          <Select placeholder="By Day" size="small" />
        </div>
      </div>
      <Line
        height={"100%"}
        width={"100%"}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              titleColor: "#000",
              boxPadding: 13,
              cornerRadius: 5,
              caretPadding: 10,
              backgroundColor: "#fff",

              xAlign: "right",
              titleFont: {
                size: 10,
                weight: "normal",
              },
              bodyColor: "#000",
              callbacks: {
                title: function (context) {
                  return "September 2, 2023";
                },
              },
            },
            legend: {
              display: false,
            },
          },

          elements: {
            line: {
              tension: 0.35,
            },
            point: {
              radius: 0,
            },
          },
          interaction: {
            mode: "index",
            intersect: false,
          },
          scales: {
            x: {
              display: false,

              title: {
                display: true,
              },
            },
            y: {
              display: true,
              ticks: {
                callback: (value) => {
                  return value + "K";
                },
              },
              title: {
                display: true,
              },
            },
          },
        }}
        data={{
          labels: ["Aug 28", "Aug 29", "Aug 30", "Sep 1", "Sep 2", "Sep 3"],
          datasets: [
            {
              // borderColor: "#3787FF",
              label: "Email",
              data: [33, 53, 85, 41, 44, 65],
              fill: true,
              pointBackgroundColor: "#000",
              pointBorderColor: "#000",
              backgroundColor: (context: ScriptableContext<"line">) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "#BAD5FF");
                gradient.addColorStop(1, "rgba(186,213,255,0)");
                return gradient;
              },
              borderWidth: 2,
              tension: 0.35,
              borderColor: "rgb(53, 162, 235)",
            },
            {
              // borderColor: "#3787FF",
              label: "SMS",
              data: [13, 43, 95, 11, 44, 95],
              fill: true,

              pointBackgroundColor: "#fec637",
              pointBorderColor: "#fec637",

              backgroundColor: (context: ScriptableContext<"line">) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "#BAD5FF");
                gradient.addColorStop(1, "rgba(186,213,255,0)");
                return gradient;
              },
              borderWidth: 2,
              tension: 0.35,
              borderColor: "rgb(53, 162, 235)",
            },
          ],
        }}
      />
    </div>
  );
}

export default CampaignChart;
