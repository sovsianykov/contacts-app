import React from 'react';
import Grid from "@mui/material/Grid";
import GridItem from "./GridItem";

const ContactsGrid = ({data}) => {
    return (
        <Grid container >
            {data.map(c => (<Grid item  xs={12} md={3} key={c.login.uuod}>
                <GridItem contact={c}  />
            </Grid>))}
        </Grid>
    );
};

export default ContactsGrid;
