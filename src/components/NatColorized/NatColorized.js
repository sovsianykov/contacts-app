import React from "react";
import { Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { NATIONALITIES_HUMANE_NAME } from "../../constants/nationality";
import theme from "../../constants/theme";

const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {
      display: "flex",
      padding: "3px 5px",
      letterSpacing: "0.1rem",
      alignItems: "center",
      color: theme.grey[100],
      textTransform: "lowercase",
      textShadow: theme.shadow.main,
      background: ({ color }) => `${theme.natColor[color]}`,
      borderRadius: 3,
    },
  });
});

const NatColorized = ({ item }) => {
  const props = {
    color: item.nat,
  };
  const classes = useStyles(props);
  return (
    <Box align="center" justifyContent="center" className={classes.root}>
      {NATIONALITIES_HUMANE_NAME[item.nat]}
    </Box>
  );
};

export default NatColorized;
