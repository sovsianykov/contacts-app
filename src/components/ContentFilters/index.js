import React from "react";
import Box from "@mui/material/Box";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { NATIONALITIES_HUMANE_NAME } from "../../constants/nationality";

const useStyles = makeStyles(() => {
  return createStyles({
    fieldGender: {
      width: "200px",
    },
  });
});

const ContentFilters = ({ filters, updateFilter }) => {
  const classes = useStyles();
  const handleChangeFilter = (event) => {
    updateFilter(event.target.name, event.target.value);
  };
  return (
    <Box display="flex">
      <TextField
        name="fullname"
        label="Fullname"
        value={filters.fullname}
        variant="outlined"
        size="small"
        onChange={handleChangeFilter}
      />
      <FormControl className={classes.fieldGender}>
        <InputLabel id="demo">Gender</InputLabel>
        <Select
          size="small"
          id="demo"
          name="gender"
          value={filters.gender}
          label="Gender"
          onChange={handleChangeFilter}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"male"}>male</MenuItem>
          <MenuItem value={"female"}>female</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.fieldGender}>
        <InputLabel id="demos">Nationality</InputLabel>
        <Select
          size="small"
          id="demos"
          name="nationality"
          value={filters.nationality}
          label="Nationality"
          onChange={handleChangeFilter}
        >
          <MenuItem value={"All"}>All</MenuItem>
          {Object.entries(NATIONALITIES_HUMANE_NAME).map(([value, label]) => (
            <MenuItem value={value} key={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ContentFilters;

ContentFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
};
