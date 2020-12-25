import React from "react";
import Contact from "./Contact";
import WorkHistory from "./WorkHistory";
import HeadPlate from "./HeadPlate";
import Profile from "./Profile";
import Projects from "./Projects";
import SkillSet from "./SkillSet";
import {
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
  insideStyles: {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
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

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

function MainBody(props) {
  const classes = useStyles();
  return (
    <div>
      <HeadPlate />
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          {/* <div className={classes.insideStyles}> */}
          <Profile />
          {/* </div> */}
        </div>
      </Parallax>
      <WorkHistory />
      <SkillSet />
      <Projects />
      <Contact />

      <ScrollTop {...props}>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <ExpandLessIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default MainBody;
