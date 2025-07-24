import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LinearChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Price"]]);

  useEffect(() => {
    if (historicalData?.prices) {
      const datacopy = [["Date", "Price"]];
      historicalData.prices.forEach((item) => {
        datacopy.push([new Date(item[0]).toLocaleDateString().slice(0,-5), item[1]]);
      });
      setData(datacopy);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="100%"
      legendToggle
    />
  );
};

export default LinearChart;