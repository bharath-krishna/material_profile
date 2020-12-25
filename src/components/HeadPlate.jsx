import {
  AppBar,
  Avatar,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const useStyle = makeStyles((theme) => ({
  toolbar_items: {
    color: "white",
    fontSize: "15px",
    flexGrow: 1,
  },
}));

function HeadPlate() {
  const classes = useStyle();
  return (
    <Container id="Top">
      <AppBar>
        <Toolbar>
          <Link to="/#Top" className={classes.toolbar_items} smooth>
            <Typography>Home</Typography>
          </Link>
          <Link to="/#WorkHistory" className={classes.toolbar_items} smooth>
            <Typography>Work History</Typography>
          </Link>
          <Link to="/#SkillSet" className={classes.toolbar_items} smooth>
            <Typography>Skill Set</Typography>
          </Link>
          <Link to="/#Projects" className={classes.toolbar_items} smooth>
            <Typography>Projects</Typography>
          </Link>
          <Link to="/#Contact" className={classes.toolbar_items} smooth>
            <Typography>Contact</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Container>
  );
}

export default HeadPlate;
