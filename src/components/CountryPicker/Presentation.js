import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import "../../styles/CountryPicker.css";
const Presentation = (props) => {
  const { countrys, sethandleCountryChange } = props;
  return (
    <div className="country">
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => {
            sethandleCountryChange;
          }}
        >
          <option value="">india</option>
          {countrys.map((country, i) => (
            <option key={i} value="global">
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};
export default Presentation;
