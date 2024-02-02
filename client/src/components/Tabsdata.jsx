import React, { useEffect, useState } from "react";
import { AppBar, Box, Typography, Tabs, Tab } from "@mui/material";
import axios from "axios";

function Tabsdata() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/visualData");
      const dataGot = await response.json();
      setData(dataGot.dataJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  });

  return (
    <>
      <div>
        {data.map((item, index) => {
          <p key={index}>{item}</p>;
        })}
      </div>
    </>
  );
}

// -	Intensity
// -	Likelihood
// -	Relevance
// -	Year
// -	Country
// -	Topics
// -	Region
// -	City

export default Tabsdata;
