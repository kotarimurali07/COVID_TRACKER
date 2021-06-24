import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/ApiData";
import Presentation from "./Presentation";
const Container = () => {
  const [dailyData, setDialydata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDailyData();
        setDialydata(data);
      } catch (error) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Presentation dailyData={dailyData} />
    </div>
  );
};

export default Container;
