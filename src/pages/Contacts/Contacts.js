import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useContacts } from "../../hooc/useContacts";
import {Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import { createStyles } from "@mui/styles";
import ContactTable from "./ContactTable";
import ToggleDataViewMode from "../../components/ToggleDataViewMode";
import { DATA_VIEW_MODES } from "../../constants/constants";
import { useDataViewMode } from "./useDataViewMod";

const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    headContacts: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(4),
    },
    fieldGender : {
      width: 100
    }
  });
});

const filtersDefaultData = { fullname: "" , gender: "All"};
//
const filterByFullName = ({ first, last }, fullname ) =>
  first?.toLowerCase().includes(fullname.toLowerCase()) ||
     last?.toLowerCase().includes(fullname.toLowerCase())

const filterByGender = (gender,filterGender) => {
  if  (filterGender === "All" ) {
    return true;
  }
  return gender === filterGender || gender === ""
}


const Contacts = () => {
  const classes = useStyles();
  const { data, isLoading, error } = useContacts();
  const [dataViewMode, setDataViewMode] = useDataViewMode();
  const [filters, setFilters] = useState(filtersDefaultData);

  const handleChangeFilter = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [event.target.name]: event.target.value,
    }));
  };

  const filteredContacts = data&&data
      .filter((c) => filterByFullName(c.name, filters.fullname))
      .filter((c) => filterByGender(c.gender, filters.gender))
  console.log("filteredContacts",filteredContacts)
  return (
    <Container className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between">
              <Typography
                variant="h4"
                component="h1"
                className={classes.headContacts}
              >
                Contacts
              </Typography>
              <ToggleDataViewMode
                setDataViewMod={setDataViewMode}
                dataViewMode={dataViewMode}
              />
            </Box>
            <Box display="flex">
              <TextField
                name="fullname"
                label="Fullname"
                value={filters.fullname}
                variant="outlined"
                size="small"
                onChange={handleChangeFilter}
              />
              <FormControl className={classes.fieldGender} >
                <InputLabel id="demo">Gender</InputLabel>
                <Select
                    size='small'
                    id="demo"
                    name="gender"
                    value={filters.gender}
                    label="Gender"
                    onChange={handleChangeFilter}
                >
                  <MenuItem  value={'All'}>All</MenuItem>
                  <MenuItem value={"male"}>male</MenuItem>
                  <MenuItem value={"female"}>female</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            {(() => {
              if (isLoading) {
                return <div>Loading...</div>;
              }
              if (error) {
                return <div> "Something vent wrong !" </div>;
              }
              if (dataViewMode === DATA_VIEW_MODES.TABLE) {
                return <ContactTable data={filteredContacts} />;
              }
              if (dataViewMode === DATA_VIEW_MODES.GRID) {
                return "grid";
              }
            })()}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contacts;
