import React from "react";
import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import {dataOfSales} from './../../../dataChart'

export default function SaleCharts() {
  const [saleData , setSaleData] = useState(dataOfSales)

  return (
    <>
      <ResponsiveContainer width={"100%"} aspect={1}>
        <BarChart height={300} data={saleData}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="sale" fill="#8884d8" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
