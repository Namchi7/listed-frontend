import React from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

import styles from "./css/lineChart.module.css";

// const data = [
//   {
//     name: "Basic Tees",
//     value: 55,
//     color: "#98D89E",
//   },
//   {
//     name: "Custom Short Pants",
//     value: 31,
//     color: "#F6DC7D",
//   },
//   {
//     name: "Super Hoodies",
//     value: 14,
//     color: "#EE8484",
//   },
// ];

function GetPieChart(parsedData) {
  // console.log(parsedData.data);
  const data = parsedData.data;

  return (
    <ResponsiveContainer width="100%" height="100%" maxHeight={150}>
      <PieChart>
        <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={45}>
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default GetPieChart;
