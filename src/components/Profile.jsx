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
  root: {
    paddingTop: 200,
  },
  avatar: {
    position: "absolute",
    width: 200,
    height: 200,
    [theme.breakpoints.down("md")]: { top: 20 },
    [theme.breakpoints.up("md")]: { left: 42, top: 163 },
  },
  name: {
    paddingTop: 240,
    paddingBottom: 60,
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
    <Grid
      container
      id="Profile"
      // className={classes.root}
      alignContent="center"
      justify="center"
    >
      <Avatar src="./bharath.jpeg" className={classes.avatar} />
      <Grid item xs={12} md={8}>
        <Typography variant="h4" display="block" className={classes.name}>
          Bharath Krishna
          <Typography variant="subtitle2">
            Backend Application Engineer
          </Typography>
        </Typography>
      </Grid>
      <Grid item>
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
