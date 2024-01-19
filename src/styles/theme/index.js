import CssBaseline from "@mui/material/CssBaseline";
import {
    StyledEngineProvider,
    ThemeProvider,
    createTheme
} from "@mui/material/styles";
import { useMemo } from "react";
import palette from "./palette";
import shape from "./shape";
import typography from "./typography";

const ThemeWrapper = (props) => {
  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 960,
          lg: 1240,
          xl: 1920,
        },
      },
      palette,
      typography,
      shape,
      // shadows,
      // customShadows
    }),
    []
  );

//   const Dark = useMemo(
//     () => ({
//       breakpoints: {
//         values: {
//           xs: 0,
//           sm: 768,
//           md: 960,
//           lg: 1240,
//           xl: 1920,
//         },
//       },
//       palette: darkPalette,
//       typography,
//       shape,
//       // shadows,
//       // customShadows
//     }),
//     []
//   );

  // const DarkTheme = createTheme({
  //   breakpoints: {
  //     values: {
  //       xs: 0,
  //       sm: 768,
  //       md: 960,
  //       lg: 1200,
  //       xl: 1920,
  //     },
  //   },
  //   palette: darkPalette,
  //   typography,
  //   shape,
  // });

//   const DarkThemes = createTheme(Dark);
  const LightTheme = createTheme(themeOptions);

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={LightTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeWrapper;
