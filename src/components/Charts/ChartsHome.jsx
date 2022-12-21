import React from "react";
import './ChartHome.css'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function ChartsHome({title, data, dataKey, grid}) {
  return (
    <>
      <section className="chart-home">
        <h3>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type='monotone' dataKey={dataKey} stroke="#5550bd" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
          </LineChart>
        </ResponsiveContainer>
      </section>
    </>
  );
}
