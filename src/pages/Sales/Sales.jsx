import React from "react";
import "./Sales.css";
import SaleCharts from "../../components/Charts/SaleCharts/SaleCharts";
import SaleChartSecond from "../../components/Charts/SaleChart2/SaleChartSecond";
import SaleChartThird from "../../components/Charts/SaleChart3/SaleChartThird";
import SaleChartFour from "../../components/Charts/SaleChart4/SaleChartFour";

export default function Sales() {
  return (
    <section className="container-slaes">
      <h2>Sales of 6 months in 4 charts</h2>
      <section>
        <div>
          <SaleCharts />
        </div>
        <div>
          <SaleChartSecond />
        </div>
      </section>
      <section>
        <div>
          <SaleChartThird />
        </div>
        <div>
          <SaleChartFour/>
        </div>
      </section>
    </section>
  );
}
