import React, { Fragment } from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({}));

function Profile() {
  const classes = useStyle();
  return (
    <Fragment>
      <Grid container justify="center" id="Profile">
        <Container>
          <Grid item>
            <Typography variant="h4" display="block">
              Bharath Krishna
            </Typography>
            <Typography variant="subtitle2">
              Backend Application Engineer
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">Summary</Typography>
            <Typography variant="subtitle1" align="left">
              Application engineeer with 8+ years of experience in building
              backend services using python and building all in one frameworks.
              Building microservice orchestration in kubernetes. UI development
              using React.
            </Typography>
          </Grid>
        </Container>
      </Grid>
      <Paper
        style={{
          width: 0,
          height: 250,
        }}
      />
    </Fragment>
  );
}

export default Profile;
