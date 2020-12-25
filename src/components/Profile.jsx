import React, { Fragment } from "react";
import {
  Avatar,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  title: {
    paddingTop: 200,
    paddingBottom: 100,
  },
  subtitle1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
}));

function Profile() {
  const classes = useStyle();
  return (
    <Grid container id="Profile">
      <Grid item lg={12}>
        <Avatar
          src="./bharath.jpeg"
          style={{
            position: "absolute",
            left: 42,
            top: 163,
            width: 200,
            height: 200,
          }}
        />
      </Grid>
      <Grid item>
        <Typography variant="h4" display="block" className={classes.title}>
          Bharath Krishna
          <Typography variant="subtitle2">
            Backend Application Engineer
          </Typography>
        </Typography>

        <Typography variant="h5">Summary</Typography>
        <Typography
          variant="subtitle1"
          align="left"
          className={classes.subtitle1}
        >
          Application engineeer with 8+ years of experience in building backend
          services using python and building all in one frameworks. Building
          microservice orchestration in kubernetes. UI development using React.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Profile;
