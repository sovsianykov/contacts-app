import React from "react";
import { Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { NATIONALITIES_HUMANE_NAME } from "../../constants/nationality";

const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {
      display: "flex",
      padding: "3px 5px",
      letterSpacing: "0.2rem",
      alignItems: "center",
      fontWeight: 700,
      color: theme.grey[100],
      textTransform: "lowercase",
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
