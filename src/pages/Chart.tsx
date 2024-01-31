import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const options: any = {

  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      grid: {
        display: false, // Disable x-axis grid lines
      },
      title: {
        display: false,
        text: "Weeks",
      },
      ticks: {
        font: {
          size: 12, // Font size for x-axis ticks
          color: "#98A2B3",
          weight: "normal", // Font weight for y-axis ticks
        },
      },
    },
    y: {
      display: true,
      title: {
        display: false,
        text: "Payment Amount",
      },
      ticks: {
        callback: function (tickValue: string | number) {
          // Adjust this function based on your needs
          return `$${tickValue}K`;
        },
        font: {
          size: 12, // Font size for y-axis ticks
          weight: "normal", // Font weight for y-axis ticks
          color: "#98A2B3", // Font color for y-axis ticks
        },
        stepSize: 6, // Specify the step size between ticks
        minTicksLimit: 5, // Maximum number of ticks (including min and max)
        maxTicksLimit: 5, // Maximum number of ticks (including min and max)
        max: 30, // Maximum value on the y-axis
        min: 0,
        // values: [0, 5, 10, 20, 30],
      },
    },
  },

  plugins: {
    legend: {
      display: false, // Hide legend
    },

    tooltip: {
      backgroundColor: "#fff",
      bodyColor: "#475467",
      titleSpacing: 4,
      bodySpacing: 16,
      titleColor: "#263238",
      titleMarginBottom: 6,
      padding: 12,
      titleFontSize: 30,
      usePointStyle: true,
      intersect: true,
      enabled: true,
      callbacks: {
        label: function (context: any) {
          const value = context.raw;
          return `Payment: $${value}`;
        },
      },
    },
  },
  interaction: {
    mode: "index" as const, // Use 'index' instead of 'string'
  },
  elements: {
    line: {
      tension: 0.35,
    },
  },
};

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const PaymentData: any = {
  labels: weeks,
  datasets: [
    {
      label: "payment",

      data: [0,5,10,20,30],

      borderColor: "#3787FF",
      borderWidth: 2,
      fill: true,
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#BAD5FF");
        gradient.addColorStop(1, "rgba(186,213,255,0)");
        return gradient;
      },
      pointRadius: 0.8,
      pointHoverRadius: 8,
      pointHoverBorderColor: "#3787FF",
      pointHoverBackgroundColor: "#ffffff",
      pointHoverBorderWidth: 2,
      pointHitRadius: 1,
      pointRotation: 10,
      pointStyle: "circle",
    },
  ],
};

export function Chart() {
  return (
    <Line
      options={options}
      data={PaymentData}
      style={{ width: "100%", height: "200px" }}
    />
  );
}

/// ------------ this  is campaign chart -----------------
const campaignOption: any = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      grid: {
        display: false, // Disable x-axis grid lines
      },
      title: {
        display: false,
        text: "Weeks",
      },
      ticks: {
        font: {
          size: 12, // Font size for x-axis ticks
          color: "#98A2B3",
          weight: "normal", // Font weight for y-axis ticks
        },
      },
    },
    y: {
      display: true,
      title: {
        display: false,
        text: "Campaign",
      },
      ticks: {
        callback: function (tickValue: string | number) {
          // Adjust this function based on your needs
          return `${tickValue}%`;
        },
        font: {
          size: 12, // Font size for y-axis ticks
          weight: "normal", // Font weight for y-axis ticks
          color: "#98A2B3", // Font color for y-axis ticks
        },
        stepSize: 25, // Specify the step size between ticks
        max: 100, // Maximum value on the y-axis
        min: 0,
        values: [0, 30, 50, 70, 100], // Fixed values on the y-axis
      },
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    tooltip: {
      backgroundColor: "#fff",
      bodyColor: "#475467",
      titleSpacing: 4,
      bodySpacing: 16,
      titleColor: "#263238",
      titleMarginBottom: 6,
      padding: 12,
      titleFontSize: 30,
      usePointStyle: true,
      intersect: true,
      enabled: true,
      mode: "index", // Display multiple tooltips when clicking on multiple points
      callbacks: {
        label: function (context: any) {
          const value = `${context.raw}%`;
        },
      },
    },
  },

  interaction: {
    mode: "index" as const, // Use 'index' instead of 'string'
  },
  elements: {
    line: {
      tension: 0.35,
    },
    point: {
      radius: 1,
    },
  },
};

const campaignData = {
  labels: weeks,
  datasets: [
    {
      label: "Email",
      data: [0, 10, 20, 50, 100],

      borderColor: "#3787FF",
      tension: 0.35,
      borderWidth: 2,
      fill: true,
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#BAD5FF");
        gradient.addColorStop(1, "rgba(186,213,255,0)");
        return gradient;
      },
    },
    {
      label: "SMS",
      data: [0, 10, 20, 50, 100],

      borderColor: "grey",
      tension: 0.35,
      borderDash: [5, 5],
      borderWidth: 2,
    },
  ],
};

export function CampaignChart() {
  return (
    <Line
      options={campaignOption}
      data={campaignData}
      style={{ width: "100%", height: "200px" }}
    />
  );
}

const ReviewsOption: any = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      grid: {
        display: false, // Disable x-axis grid lines
      },
      title: {
        display: false,
        text: "Weeks",
      },
      ticks: {
        font: {
          size: 12, // Font size for x-axis ticks
          color: "#98A2B3",
          weight: "normal", // Font weight for y-axis ticks
        },
      },
    },
    y: {
      display: true,
      title: {
        display: false,
        text: "Campaign",
      },
      ticks: {
        callback: function (tickValue: string | number) {
          // Adjust this function based on your needs
          return `${tickValue}.0`;
        },
        font: {
          size: 12, // Font size for y-axis ticks
          weight: "normal", // Font weight for y-axis ticks
          color: "#98A2B3", // Font color for y-axis ticks
        },
        stepSize: 1, // Specify the step size between ticks
        maxTicksLimit: 6, // Maximum number of ticks (including min and max)
        max: 5, // Maximum value on the y-axis
        min: 0,
        // values: [0, 5, 10, 20, 30],
      },
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    tooltip: {
      backgroundColor: "#fff",
      bodyColor: "#475467",
      titleSpacing: 4,
      bodySpacing: 16,
      titleColor: "#263238",
      titleMarginBottom: 6,
      padding: 12,
      titleFontSize: 30,
      usePointStyle: true,
      intersect: true,
      enabled: true,
      mode: "index", // Display multiple tooltips when clicking on multiple points
      callbacks: {
        label: function (context: any) {
          const value = context.raw;
        },
      },
    },
  },
  interaction: {
    mode: "index" as const, // Use 'index' instead of 'string'
  },
  elements: {
    line: {
      tension: 0.35,
    },
    point: {
      radius: 1,
    },
  },
};
const ReviewsData = {
  labels: weeks,
  datasets: [
    {
      label: "Google",
      data: [1, 2, 3, 4, 5],

      borderColor: "#3787FF",
      tension: 0.35,
      borderWidth: 2,
      fill: true,
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#BAD5FF");
        gradient.addColorStop(1, "rgba(186,213,255,0)");
        return gradient;
      },
    },
    {
      label: "TrustPilot",
      data: [1, 2, 3, 4, 5],

      borderColor: "grey",
      tension: 0.35,
      borderDash: [5, 5],
      borderWidth: 2,
    },
  ],
};

export function ReviewsChart() {
  return (
    <Line
      options={ReviewsOption}
      data={ReviewsData}
      style={{ width: "100%", height: "200px" }}
    />
  );
}
