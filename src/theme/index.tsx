/* eslint-disable import/no-anonymous-default-export */
import { createTheme, responsiveFontSizes } from '@mui/material'
import paletteDark from './paletteDark'
import paletteLight from './paletteLight'
import typography from './typography'

const pallets: any = {
  LIGHT: paletteLight,
  DARK: paletteDark,
}

export default (colorTheme: any) => {
  // apply typography
  let theme = createTheme(typography(pallets[colorTheme]), {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  })

  // apply components
  //   theme = createTheme(theme, MuiContainer(theme));

  // apply responsiveFontSizes
  theme = responsiveFontSizes(theme)

  return theme
}
