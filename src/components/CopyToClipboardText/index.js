import * as React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { FileCopyOutlined } from "@mui/icons-material";
import { createStyles, makeStyles } from "@mui/styles";
import { useCopyToClipboard } from "react-use";
import { useCallback, useState } from "react";
import { ButtonUnstyled, Tooltip } from "@mui/material";
const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      border: "none",
      cursor: "pointer",
      background: "none",
      color: theme.text.primary.main,
      textTransform: "lowercase",
      transaction: "0.15ms ease-in-out",
      "&:hover ": {
        color: theme.text.secondary.main,
        background: theme.grey[200],
      },
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  });
});

const CopyToClipboardText = ({ text }) => {
  const classes = useStyles();
  const [state, copyToClipboard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = useState("copy");
  const tooltipTitle = useCallback(() => {
    switch (statusCopy) {
      case "copy":
        return "Copy";
      case "copied":
        return "Copied";
      default:
        return "";
    }
  }, [statusCopy]);

  const onClickHandler = useCallback(() => {
    copyToClipboard(text);
    setStatusCopy("copied");
  }, [copyToClipboard, text]);

  return (
    <Tooltip title={tooltipTitle()} placement="top" arrow>
      <ButtonUnstyled className={classes.root} onClick={onClickHandler}>
        <FileCopyOutlined fontSize="small" className={classes.icon} />
        {text}
      </ButtonUnstyled>
    </Tooltip>
  );
};

export default CopyToClipboardText;

CopyToClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
};
