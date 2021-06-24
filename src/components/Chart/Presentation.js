import React from "react";
import { Line, Bar } from "react-chartjs-2";
import "../../styles/Chart.css";
const Presentation = (props) => {
  const { dailyData } = props;
  const linChart = dailyData ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            fill: true,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "deaths",
            fill: true,
            borderColor: "red",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)",
          },
        ],
      }}
    />
  ) : null;
  return <div className="Chart">{linChart}</div>;
};

export default Presentation;
