/* eslint-disable import/no-anonymous-default-export */
import { createTheme } from "@mui/material";

export default (theme: any) => {
  return createTheme(theme, {
    typography: {
      fontFamily: ["'Open Sans'", "'Red Rose'"].join(","),
      manage: {
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "28px",
        lineHeight: "38px",
        color: "#F49744",
      },
      manageSmall: {
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "24px",
        lineHeight: "33px",
        color: "#F49744",
      },
      buttonTextSmall: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "33px",
        color: "#F49744",
      },
      buttonS: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "13px",
        lineHeight: "22px",
        color: "#F0F1F4",
      },
      smaller: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "20px",
      },
      middle: {
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "30px",
      },
      biggest: {
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "32px",
        lineHeight: "44px",
      },
      numbers: {
        fontStyle: "normal",
        fontWeight: "400",
        [theme.breakpoints.up('xs')]: {
          fontSize: "40px",
        },
        [theme.breakpoints.up('md')]: {
          fontSize: "57px",
        },
        lineHeight: "64px",
      },
      numberNotFound: {
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "175px",
        lineHeight: "64px",
      },
      modalSubText: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "143%",
      },
      middleText: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "130%",
      },
      bigText: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: "130%",
      },
      tamplateText: {
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "130%",
        [theme.breakpoints.up('xs')]:{
          fontSize: "12px",
        },
        [theme.breakpoints.up('md')]:{
          fontSize: "13px",
        },
        [theme.breakpoints.up('lg')]:{
          fontSize: "16px",
        },
      },
      markersText: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "28px",
        lineHeight: "143%",
      },
      blueButtonText: {
        fontStyle: "normal",
        fontWeight: "400",
        [theme.breakpoints.up('xs')]: {
          fontSize: "12px",
        },
        [theme.breakpoints.up('md')]: {
          fontSize: "14px",
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: "16px",
        },
        lineHeight: "143%",
      },
    }
  });
}