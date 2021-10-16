import React, {memo, useCallback} from "react";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { NATIONALITIES_HUMANE_NAME } from "../../constants/nationality";
import { ClearOutlined} from "@mui/icons-material";

const useStyles = makeStyles(() => {
  return createStyles({
     fieldContainer : {
       width : "45%",
       "& > * :not(:last-child)": {

    }
  },

    fieldGender: {
      width: "120px",
    },
    fieldNationality: {
      width: "140px",
    },
  });
});

const ContentFilters = ({ filters, updateFilter, clearFilters  }) => {
  const classes = useStyles();
  const handleChangeFilter = useCallback((event) => {
    updateFilter(event.target.name, event.target.value);
  },[updateFilter])

  const handleClearClick = () => {
    clearFilters()
  }

  return (
    <Box display="flex" justifyContent='space-between'>
    <Box display="flex" className={classes.fieldContainer} justifyContent='space-between' >
      <TextField
        name="fullname"
        label="Fullname"
        value={filters.fullname}
        variant="outlined"
        size="small"
        onChange={handleChangeFilter}
      />
      <FormControl className={classes.fieldGender}>
        <InputLabel id="demo" >Gender</InputLabel>
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
      <FormControl className={classes.fieldNationality}>
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
      <Button
      variant='container'
      size='small'
      startIcon={<ClearOutlined/>}
       onClick={handleClearClick}
      >

        Clear</Button>
    </Box>
  );
};

export default memo(ContentFilters);

ContentFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
};
