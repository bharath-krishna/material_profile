import { Avatar, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  headplate: (props) => ({
    width: props.width,
    height: props.height - 500,
  }),
  avatar: (props) => ({
    width: props.avatar_width,
    height: props.avatar_height,
    top: -props.avatar_width / 2,
    left: (props.width - props.avatar_height) / 2,
  }),
});

function HeadPlate() {
  const [size, setSize] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
    avatar_width: 150,
    avatar_height: 150,
  });
  const classes = useStyle(size);
  React.useEffect(() => {
    function handleResize() {
      setSize({
        ...size,
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <Grid container>
      <Grid item style={{ justifyContent: "center", alignItems: "center" }}>
        <Avatar
          src="/landscape.jpg"
          variant="square"
          className={classes.headplate}
        />
        <Avatar src="/avatar.jpeg" className={classes.avatar} />
      </Grid>
    </Grid>
  );
}

export default HeadPlate;
