import React from "react";
import Card from "./CasesCard/Card";
import down from "../assets/Down.svg";
import up from "../assets/Up.svg";
import { fetchGlobalCases } from "./helper/apicalls";
import { useState } from "react";
import { useEffect } from "react";
let dataA;

const AllCases = () => {
  const [hello, setHello] = useState();

  const fetchAll = async () => {
    dataA = await fetchGlobalCases();
    console.log(dataA.cases);
    setHello(dataA.cases);
    console.log(hello);

    // setData();
    // console.log("hello", data);
  };
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div>
      {dataA ? (
        <div style={{ margin: "1% 1% 2% 5%" }}>
          <Card title="Total Cases" src={up} src={up} value={dataA.cases} />
          <Card title="Total Recovered" src={up} value={dataA.recovered} />
          <Card title="Total Active" src={down} value={dataA.active} />
          <Card title="Total Deaths" src={up} value={dataA.deaths} />
        </div>
      ) : null}
    </div>
  );
};

export default AllCases;
