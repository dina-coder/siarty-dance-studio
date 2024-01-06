import { createTheme } from "@mui/material";
import { COLORS } from "./colors";

export const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, Roboto',
    },
    palette: {
      },
    components: {
        MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundColor: COLORS.BLACK_1_ALPHA_80,
                color: COLORS.WHITE
              }
            }
        }
    }
  });