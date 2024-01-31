import { Chart as ChartJS, Filler, ScriptableContext } from "chart.js";
import { Line } from "react-chartjs-2"; 
ChartJS.register(Filler);
function LineChart() {
  return (
    <div className="w-full h-[230px] ">
      <Line
        height={"100%"}
        width={"100%"}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
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
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              // borderColor: "#3787FF",
              label: "adsd",
              data: [33, 53, 85, 41, 44, 65],
              fill: true,

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

export default LineChart;
