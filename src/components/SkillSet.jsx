import { Container, Grid, Paper, Toolbar, Typography } from "@material-ui/core";
import React from "react";

function SkillSet() {
  return (
    <Container id="SkillSet">
      <Toolbar />
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h5">Skill Set</Typography>
          <Typography variant="h6" align="left">
            Python
          </Typography>
          <Typography variant="subtitle1" align="left">
            8+ years of experience of building applications using python and its
            frameworks like django, aiohttp, fastapi. In dept knowledge of
            standard and third party libraries of database, http clients etc.
          </Typography>
          <Typography variant="h6" align="left">
            Kubernetes
          </Typography>
          <Typography variant="subtitle1" align="left">
            Certified kubernetes administrator and application developer. Good
            at building microservice orchestration and service mesh.
          </Typography>
          <Typography variant="h6" align="left">
            Go lang
          </Typography>
          <Typography variant="subtitle1" align="left">
            Good at building services using go lang and its frameworks like
            GoChi, GoGin.
          </Typography>
          <Typography variant="h6" align="left">
            Ansible
          </Typography>
          <Typography variant="subtitle1" align="left">
            Proficient in making cluster deployment scripts and playbooks using
            ansible. Good at ansible tower and ansible AWX.
          </Typography>
        </Grid>
      </Grid>
      <Paper
        style={{
          width: 0,
          height: 250,
        }}
      />
    </Container>
  );
}

export default SkillSet;
