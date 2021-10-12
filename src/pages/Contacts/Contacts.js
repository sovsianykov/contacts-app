import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useContacts } from "../../hooc/useContacts";
import {Container, Typography} from "@mui/material";
import { createStyles } from "@mui/styles";
import ContactTable from "./ContactTable";

const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {
      marginTop: theme.spacing(3),
    },
    headContacts: {
        marginBottom: theme.spacing(4),
        color: theme.palette.primary.main
    },
  });
});

const Contacts = () => {
  const classes = useStyles();
  const { data, isLoading, error } = useContacts();

  return (
    <Container className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
            <Grid item xs={12}>
                <Typography variant='h3' component='h1' className={classes.headContacts} >
                    Contacts
                </Typography>
            </Grid>
          <Grid item xs={12}>
              {(() => {
                  if (isLoading) {
                      return <div>Loading...</div>;
                  }
                  if (error) {
                      return <div> "Something vent wrong !" </div>;
                  }
                  return   <ContactTable data={data}/>
              }) ()
              }
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contacts;
