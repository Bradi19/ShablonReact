import { createTheme } from "@mui/material";

let palette = createTheme({
  palette: {
    background: {
      default: "#F0F1F4",
    },
    info: {
      main: "#F49744",
    },
    text: {
      primary: '#253D5A',
      secondary: '#F49744',
    },
    action: {
      active: "#253D5A",
    },
    secondary: {
      main: "#2F6A99"
    },
    primary: {
      main: "#2F6A99",
      contrastText: "#fff",
    },
  },
});

export default palette;