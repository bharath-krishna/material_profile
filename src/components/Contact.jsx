import { Container, Paper, Toolbar, Typography } from "@material-ui/core";
import React from "react";

function Contact() {
  return (
    <Container id="Contact">
      <Toolbar />
      <Typography variant="h5">Contacts</Typography>
      <Typography variant="subtitle1" align="left">
        bharath.chakravarthi@gmail.com
      </Typography>
      <Paper
        style={{
          width: 0,
          height: 250,
        }}
      />
    </Container>
  );
}

export default Contact;
