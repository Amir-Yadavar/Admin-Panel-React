import React from "react";
import "./Feature.css";
import FeatureBox from "./FeatureBox";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Feature() {
  return (
    <>
      <section className="container-feature">
        <FeatureBox title="Revanue" rate="$ 2.415" sub="-11.4" icon={<ArrowDownwardIcon color="warning" fontSize="large"/>}/>
        <FeatureBox title="Sales" rate="$ 4.790" sub="-1.4" icon={<ArrowDownwardIcon color="warning" fontSize="large"/>}/>
        <FeatureBox title="Cost" rate="$ 2.225" sub="+2.4" icon={<ArrowUpwardIcon color="success" fontSize="large"/>}/>
      </section>
    </>
  );
}
