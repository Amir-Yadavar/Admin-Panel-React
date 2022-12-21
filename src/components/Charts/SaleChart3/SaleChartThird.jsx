import React, { useState } from "react";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import {dataOfSales} from './../../../dataChart'


export default function SaleChartThird() {
  const [saleData , setSaleData] = useState(dataOfSales)

 

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="sale"
            startAngle={180}
            endAngle={0}
            data={saleData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
