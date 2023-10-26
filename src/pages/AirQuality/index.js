import React from "react";
import styles from "./AirQuality.module.scss";
import classNames from "classnames/bind";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const airQualityData = {
  location: "Trang Tien, Vietnam",
  overallAQI: 155,
  overallAQIStatus: "Unhealthy",
  detail:
    "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
  value: "Primary pollutant: ",
  primaryPollutant: "PM2.5 (Particulate matter less than 2.5 microns)",
  pollutants: [
    {
      rate: 155,
      name: "PM2.5 (Particulate matter less than 2.5 microns)",
      status: "Unhealthy",
      value: "58.79 µg/m³",
    },
    {
      rate: 5,
      name: "CO (Carbon Monoxide)",
      status: "Good",
      value: "490 µg/m³",
    },
    {
      rate: 6,
      name: "NO2 (Nitrogen Dioxide)",
      status: "Good",
      value: "11.65 µg/m³",
    },
    {
      rate: 54,
      name: "O3 (Ozone)",
      status: "Moderate",
      value: "137.74 µg/m³",
    },
    {
      rate: 74,
      name: "PM10 (Particulate matter less than 10 microns)",
      status: "Moderate",
      value: "80.09 µg/m³",
    },
    {
      rate: 33,
      name: "SO2 (Sulfur Dioxide)",
      status: "Good",
      value: "62.11 µg/m³",
    },
  ],
};

const cx = classNames.bind(styles);

const AirQuality = () => {
  const createDoughnutData = (value, limit) => {
    const remaining = Math.max(0, limit - value);

    let backgroundColor;
    if (value > 120) {
      backgroundColor = ["#FF0000", "#d3d3d3"]; // Red
    } else if (value >= 80 && value <= 120) {
      backgroundColor = ["#FFA500", "#d3d3d3"]; // Orange
    } else if (value >= 40 && value < 80) {
      backgroundColor = ["#FFFF00", "#d3d3d3"]; // Yellow
    } else {
      backgroundColor = ["#00FF00", "#d3d3d3"]; // Green
    }

    return {
      labels: ["Used", "Remaining"],
      datasets: [
        {
          data: [value, remaining],
          backgroundColor: backgroundColor,
          hoverBackgroundColor: backgroundColor,
        },
      ],
    };
  };

  return (
    <div className={cx("container")}>
      <div className={cx("TodayQuality")}>
        <div className={cx("header")}>
          <h2>
            <strong>Today's Air Quality</strong>{" "}
            <span className={cx("sub-title")}>- {airQualityData.location}</span>
          </h2>
        </div>

        <div className={cx("content")}>
          <div className={cx("day-title")}>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td rowspan="3" className={cx("rate")}>
                      <div className={cx("chart-container")}>
                        <Doughnut
                          data={createDoughnutData(
                            airQualityData.overallAQI,
                            200
                          )}
                          options={{
                            responsive: true,
                            maintainAspectRatio: true,
                            cutout: "75%",
                            plugins: {
                              legend: false,
                              tooltip: false,
                            },
                          }}
                          width={75}
                          height={75}
                        />

                        <div className={cx("chart-label")}>
                          <span> {airQualityData.overallAQI}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>{airQualityData.overallAQIStatus}</td>
                    <td>{airQualityData.value}</td>
                  </tr>
                  <tr>
                    <td>{airQualityData.detail}</td>
                    <td>{airQualityData.primaryPollutant}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("air-quality-list")}>
        {airQualityData.pollutants.map((pollutant, index) => (
          <div key={index} className={cx("pollutant-container")}>
            <div className={cx("chart-container")}>
              <Doughnut
                data={createDoughnutData(pollutant.rate, 200)}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  cutout: "75%",
                  plugins: {
                    legend: false,
                    tooltip: false,
                  },
                }}
                width={75}
                height={75}
              />
              <div className={cx("chart-label")}>
                <span>{pollutant.rate}</span>
              </div>
            </div>
            <div className={cx("pollutant-details")}>
              <p>{pollutant.name}</p>
              <p>{pollutant.status}</p>
              <p>{pollutant.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirQuality;
