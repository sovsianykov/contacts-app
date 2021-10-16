import React from 'react';
import {Card, Paper, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {createStyles, makeStyles} from "@mui/styles";
import Avatar from "../../Avatar";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import CopyToClipboardText from "../../../components/CopyToClipboardText";
import NatColorized from "../../../components/NatColorized/NatColorized";

const useStyles = makeStyles((theme) => {
    return createStyles({
        root: {
            marginTop:  theme.spacing(4),
            minWidth: 275 ,
            display: "flex",
            flexDirection: "column",
            minHeight: 300,
            justifyContent: "space-between",
            padding: "10px 15px",

        },
        textBlue: {
            color: theme.text.primary.main,
        },
        nationality: {
            background: (color) => theme.natColor[color],
        },
    });
});



const GridItem = ({contact}) => {
    const classes = useStyles()
    return (

               <Card variant="outlined"  >
                   <Box component={Paper} className={classes.root}>
                   <Avatar src={contact.picture.thumbnail} />
                   <Typography className={classes.textBlue}>
                       {contact.name.title} {contact.name.first} {contact.name.last}
                   </Typography>
                   <Typography>
                       {format(parseISO(contact.dob.date), "MM/dd/yyyy")}
                   </Typography>
                       <Typography>{contact.dob.age} years</Typography>
                   <CopyToClipboardText text={contact.email} />
                   <CopyToClipboardText text={contact.phone} />
                   <Typography>{contact.location.country}</Typography>
                   <Typography>
                       {contact.location.street.name}
                       {contact.location.street.number}
                   </Typography>
                   <NatColorized item={contact} />
                   </Box>
               </Card>



    );
};

export default GridItem;
