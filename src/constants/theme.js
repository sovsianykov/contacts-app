import { createTheme } from "@mui/material";
import { NATIONALITIES } from "./nationality";

const theme = createTheme({

  palette: {
    primary: {
      main: "#077979",
    },
    secondary: {
      main: "#d51818",
    },
  },
  text : {
    primary: {
      main: "#185cad",
    },
    secondary: {
      main: "#073883",
    },
  },
  grey: {
    "100": "#ffffff",
    "200": "#F2F2F2",
    "300": "#EBEBEB",
  },
  shadow : {
    main: "0 0 1px #050000",
  },
  natColor: {
    [NATIONALITIES.AU]: "#f10909",
    [NATIONALITIES.BR]: "#e8ad11",
    [NATIONALITIES.CA]: "#061662",
    [NATIONALITIES.CH]: "#0ca2a2",
    [NATIONALITIES.DE]: "#3b8f43",
    [NATIONALITIES.DK]: "#f3c56c",
    [NATIONALITIES.ES]: "#f36cb0",
    [NATIONALITIES.FI]: "#d2ac0e",
    [NATIONALITIES.FR]: "#d95858",
    [NATIONALITIES.GB]: "#3b6464",
    [NATIONALITIES.IE]: "#7a4b4b",
    [NATIONALITIES.IR]: "#29c959",
    [NATIONALITIES.NO]: "#835b0c",
    [NATIONALITIES.NL]: "#1259de",
    [NATIONALITIES.NZ]: "#14d2a2",
    [NATIONALITIES.TR]: "#bcc432",
    [NATIONALITIES.US]: "#640808",
  },

});

export default theme;
