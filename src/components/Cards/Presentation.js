import React from "react";
import "../../styles/Cards.css";
import CountUp from "react-countup";
import { Typography, Grid, Card, CardContent } from "@material-ui/core";
const Presentation = ({
  data: { confirmed, recovered, deaths, lastUpdate },
}) => {
  // const { data } = props;
  // console.log(data.confirmed.value);
  //confirmed
  //recovered
  //deaths
  //lastUpdate
  if (!confirmed) {
    return "loading........";
  }
  return (
    <div className="Cards">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className="infected">
          <CardContent>
            <Typography colour="textSecondary">INFECTED ❌ </Typography>
            <Typography variant="h5">
              👉
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>

            <Typography colour="textSecondary">
              🟢 {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              🚀 number of infected cases of covid -19 🚀
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="recovered">
          <CardContent>
            <Typography colour="textSecondary">RECOVERED ✔️</Typography>
            <Typography variant="h5">
              👉
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography colour="textSecondary">
              🟢 {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              🚀 number of infected cases of covid -19 🚀
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="deaths">
          <CardContent>
            <Typography colour="textSecondary">DEATHS ☠️</Typography>
            <Typography variant="h5">
              👉
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography colour="textSecondary">
              🟢 {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              🚀 number of infected cases of covid -19 🚀
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Presentation;
