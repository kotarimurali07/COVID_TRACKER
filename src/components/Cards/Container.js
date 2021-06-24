// import React, { Component, useState } from "react";
// import Presentation from "./Presentation";
// import { fetchData } from "../../api/ApiData";
// export class App extends Component {
//   state = {
//     data: {},
//   };
//   async componentDidMount() {
//     const data = await fetchData();
//     this.setState({ data: data });
//   }
//   render() {
//     const { data } = this.state;
//     return (
//       <div>
//         <Presentation data={data} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { useEffect, useState } from "react";
import Presentation from "./Presentation";
import { fetchData } from "../../api/ApiData";

const Container = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      setData(await fetchData());
    };
    getData();
  });
  return (
    <div>
      <div>
        <Presentation data={data} />
      </div>
    </div>
  );
};

export default Container;
