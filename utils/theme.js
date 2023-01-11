import { responsiveFontSizes } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core'
import colors from 'utils/config/colors';

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: colors.yellow[600], light: colors.yellow[500] },
      secondary: { main: colors.gray[300], light: colors.gray[300] },
      info: { main: colors.white, light: colors.white },
      success: { main: colors.green[500], light: colors.green[600] },
      error: { main: "#FF0000" },
      white: { main: "#EEEEEE" },
    },
  }),
  {
    factor: 4,
    breakpoints: ["xxs", "xs", "sm", "md", "lg", "xl", "2xl"],
  }
);
