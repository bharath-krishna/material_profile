import { Container, Paper, Toolbar, Typography } from "@material-ui/core";
import React from "react";

function Projects() {
  return (
    <Container id="Projects">
      <Toolbar />
      <Typography variant="h5">Projects</Typography>

      <Typography variant="h6" align="left">
        Backend api development
      </Typography>
      <Typography variant="subtitle1" align="left">
        Building backend service for baremetal server as a service. Building
      </Typography>
      <Typography variant="h6" align="left">
        Base microsystem development
      </Typography>
      <Typography variant="subtitle1" align="left">
        organization compatable base microservice framework using fastapi for
        easy development and deployment.
      </Typography>
      <Typography variant="h6" align="left">
        Test framework development
      </Typography>
      <Typography variant="subtitle1" align="left">
        building framework for doing integration testing, unit testing, and end
        to end testing.
      </Typography>
      <Typography variant="h6" align="left">
        Building identity and authorization system
      </Typography>
      <Typography variant="subtitle1" align="left">
        Building authentication system using keycloak and a golang service for
        handling admin activities from kubernetes apis.
      </Typography>
    </Container>
  );
}

export default Projects;
