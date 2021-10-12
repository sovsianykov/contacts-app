import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import Avatar from "../../Avatar";

const useStyles = makeStyles((theme) => {
    return createStyles({
        table: {
            marginTop: theme.spacing(3),
        },
        textBlue: {
            color: theme.text.primary.main
        },

    });
});


const ContactTable = ({data}) => {
    const classes = useStyles()
    console.log(data)
    return (
        <TableContainer component={ Paper }>
            <Table className={classes.table} aria-label="contact table">
                <TableHead>
                    <TableRow>
                        <TableCell>Avatar</TableCell>
                        <TableCell >Full name</TableCell>
                        <TableCell >Birthday</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell >Phone</TableCell>
                        <TableCell >Location</TableCell>
                        <TableCell >Nationality</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) =>  (
                        <TableRow
                            key={item.login.uuid}
                        >
                            <TableCell component="th" scope="row">
                                <Avatar src={item.picture.thumbnail} />
                            </TableCell>
                            <TableCell >
                                <Typography className={classes.textBlue} >
                                    {item.name.title} {item.name.first} {item.name.last}
                                </Typography>
                            </TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>4</TableCell>
                            <TableCell align='right'>5</TableCell>
                            <TableCell align='right'>6</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ContactTable;
