import React from "react";
import Card from "./CasesCard/Card";
import down from "../assets/Down.svg";
import up from "../assets/Up.svg";
import graph from '../assets/Graph.svg'
import graph1 from '../assets/Graph 1.svg'
import graph2 from '../assets/Graph 2.svg'
import graph3 from '../assets/Graph 3.svg'
import { fetchGlobalCases } from "./helper/apicalls";
import { useState } from "react";
import { useEffect } from "react";
let dataA;

const AllCases = () => {
  const [hello, setHello] = useState();

  const fetchAll = async () => {
    dataA = await fetchGlobalCases();
    console.log(dataA);
    setHello(dataA.cases);
    console.log(hello);
  };
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div style={{height:"20px"}}>
      {dataA ? (
        <div style={{ display:"flex",padding:"10px" }}>
          <Card title="Total Cases" src={up} src1={graph} value={dataA.cases} />
          <Card title="Recovered" src={down} src1={graph1} value={dataA.recovered} />
          <Card title="Active Cases" src={up} src1={graph2} value={dataA.active} />
          <Card title="Total Death" src={up} src1={graph3} value={dataA.deaths} />
        </div>
      ) : null}
    </div>
  );
};

export default AllCases;
