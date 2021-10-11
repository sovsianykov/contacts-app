import React from 'react';
import { makeStyles } from '@mui/styles';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useContacts } from "../../hooc/useContacts";
import { Container, createStyles } from "@mui/material";

const useStyles = makeStyles( (theme) => createStyles({

    root : {
        marginTop: "24px",
    }
  })
)

const Contacts = () => {
    const classes = useStyles()
     const { data, isLoading, error } = useContacts()

    if (isLoading) {
        return  <div>Loading...</div>
     }

    if (error) {
        return  <div> "Something vent wrong !" </div>
    }
    return (

          <Container className={classes.root }>
              <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={3}>
                      <Grid item xs={12}>
                          <Paper>
                              {data[0].name.first}
                          </Paper>
                      </Grid>
                  </Grid>
              </Box>
          </Container>
    );
};

export default Contacts;