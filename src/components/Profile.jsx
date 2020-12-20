import React from "react";
import { Avatar, Container, Grid, Typography } from "@material-ui/core";

function Profile() {
  return (
    <Grid container justify="center">
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
          <Typography variant="subtitle1">
            Application engineeer with 8+ years of experience in building
            backend services using python and building all in one frameworks.
            Building microservice orchestration in kubernetes. UI development
            using React.
          </Typography>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Profile;
