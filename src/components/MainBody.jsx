import React from "react";
import Contact from "./Contact";
import WorkHistory from "./WorkHistory";
import HeadPlate from "./HeadPlate";
import Profile from "./Profile";
import Projects from "./Projects";
import SkillSet from "./SkillSet";
import {
  Container,
  Fab,
  makeStyles,
  Typography,
  useScrollTrigger,
  Zoom,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Parallax } from "react-parallax";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  inner_container: {
    color: "white",
    paddingTop: 200,
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%,-50%)",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#Top"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function MainBody(props) {
  const classes = useStyles();
  return (
    <div>
      <HeadPlate />
      {/* <div>
        width: {window.innerWidth}, height: {window.innerHeight}
      </div> */}
      <Parallax bgImage="./moon_shine.jpg" strength={750}>
        <div style={{ height: 750 }}>
          <Container style={{ color: "white" }}>
            <Profile />
          </Container>
          {/* </div> */}
        </div>
      </Parallax>
      <Parallax bgImage="./night_hills.jpeg" strength={750}>
        <div style={{ height: 750 }}>
          <Container style={{ color: "white" }}>
            <WorkHistory />
          </Container>
        </div>
      </Parallax>
      <Parallax bgImage="./forest_fire.jpg" strength={750}>
        <div style={{ height: 750 }}>
          <Container style={{ color: "white" }}>
            <SkillSet />
          </Container>
        </div>
      </Parallax>
      <Parallax bgImage="./distant_house.jpg" strength={750}>
        <div style={{ height: 750 }}>
          <Container style={{ color: "magenta" }}>
            <Projects />
          </Container>
        </div>
      </Parallax>
      <Parallax bgImage="./dark_road.jpeg" strength={750}>
        <div style={{ height: 750 }}>
          <Container style={{ color: "black" }}>
            <Contact />
          </Container>
        </div>
      </Parallax>

      <ScrollTop {...props}>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <ExpandLessIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default MainBody;
