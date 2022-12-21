import React from "react";
import { useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import {dataOfSales} from './../../../dataChart'


export default function SaleChartSecond() {
  const [saleData , setSaleData] = useState(dataOfSales)

  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={400}>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={saleData}
            dataKey="sale"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
