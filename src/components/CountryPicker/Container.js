import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api/ApiData";
import Presentation from "./Presentation";

const Container = () => {
  const [countrys, setCountry] = useState([]);
  const [handleCountryChange, sethandleCountryChange] = useState("");
  useEffect(() => {
    const getData = async () => {
      const data = await fetchCountries();
      setCountry(data);
    };
    getData();
  }, []);
  console.log(handleCountryChange);
  // const handleCountryChange = async (country) => {
  //   console.log(country);
  // };
  console.log(handleCountryChange);
  return (
    <div>
      <Presentation
        countrys={countrys}
        sethandleCountryChange={sethandleCountryChange}
      />
    </div>
  );
};
export default Container;
