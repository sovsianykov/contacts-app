import React, {memo} from "react";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import Avatar from "../../Avatar";
import CopyToClipboardText from "../../../components/CopyToClipboardText";
import NatColorized from "../../../components/NatColorized/NatColorized";

const useStyles = makeStyles((theme) => {
  return createStyles({
    table: {
      marginTop: theme.spacing(3),
    },
    textBlue: {
      color: theme.text.primary.main,
    },
    nationality: {
      background: (color) => theme.natColor[color],
    },
  });
});

const ContactTable = ({ data }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="contact table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.login.uuid}>
              <TableCell component="th" scope="row">
                <Avatar src={item.picture.thumbnail} />
              </TableCell>
              <TableCell>
                <Typography className={classes.textBlue}>
                  {item.name.title} {item.name.first} {item.name.last}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {format(parseISO(item.dob.date), "MM/dd/yyyy")}
                </Typography>
                <Typography>{item.dob.age} years</Typography>
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={item.email} />
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={item.phone} />
              </TableCell>
              <TableCell>
                <Typography>{item.location.country}</Typography>
                <Typography>
                  {item.location.street.name}
                  {item.location.street.number}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <NatColorized item={item} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(ContactTable);
