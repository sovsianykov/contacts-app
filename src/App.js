import React from "react";
import Contacts from "./pages/Contacts/Contacts";
import theme from "./constants/theme";
import { ThemeProvider } from "@mui/styles";

export function App() {
  return (
      <ThemeProvider theme={theme}>
    <div >
        <Contacts/>
    </div>
    </ThemeProvider>
  );
}


