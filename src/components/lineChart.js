import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import styles from "./css/lineChart.module.css";

// const data = [
//   {
//     week: "",
//     guest: 200,
//     user: 100,
//   },
//   {
//     week: "Week 1",
//     guest: 175,
//     user: 255,
//   },
//   {
//     week: "Week 2",
//     guest: 300,
//     user: 200,
//   },
//   {
//     week: "Week 3",
//     guest: 350,
//     user: 420,
//   },
//   {
//     week: "Week 4",
//     guest: 150,
//     user: 280,
//   },
//   {
//     week: "",
//     guest: 450,
//     user: 360,
//   },
// ];

function GetLineChart(parsedData) {
  // console.log(parsedData.data);
  const data = parsedData.data;

  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={200}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
      >
        <Line
          dot={false}
          type="monotone"
          dataKey="guest"
          stroke="#E9A0A0"
          strokeWidth={3}
        />
        <Line
          dot={false}
          type="monotone"
          dataKey="user"
          stroke="#9BDD7C"
          strokeWidth={3}
        />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="week"
          className={styles.axisTicks}
        />
        <YAxis
          type="number"
          domain={[0, 500]}
          axisLine={false}
          tickLine={false}
          tickCount={6}
          className={styles.axisTicks}
        />
        <Tooltip />
        <CartesianGrid vertical={false} stroke="#EAEAEA" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default GetLineChart;
