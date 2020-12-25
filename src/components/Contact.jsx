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
    </Container>
  );
}

export default Contact;
