// import CssBaseline from "@mui/material/CssBaseline";
// import {
//     StyledEngineProvider,
//     ThemeProvider,
//     createTheme
// } from "@mui/material/styles";
// import { useMemo } from "react";
// import palette from "./palette";
// import shape from "./shape";
// import typography from "./typography";

// const ThemeWrapper = (props) => {
//   const themeOptions = useMemo(
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
//       palette,
//       typography,
//       shape,
//       // shadows,
//       // customShadows
//     }),
//     []
//   );

// //   const Dark = useMemo(
// //     () => ({
// //       breakpoints: {
// //         values: {
// //           xs: 0,
// //           sm: 768,
// //           md: 960,
// //           lg: 1240,
// //           xl: 1920,
// //         },
// //       },
// //       palette: darkPalette,
// //       typography,
// //       shape,
// //       // shadows,
// //       // customShadows
// //     }),
// //     []
// //   );

//   // const DarkTheme = createTheme({
//   //   breakpoints: {
//   //     values: {
//   //       xs: 0,
//   //       sm: 768,
//   //       md: 960,
//   //       lg: 1200,
//   //       xl: 1920,
//   //     },
//   //   },
//   //   palette: darkPalette,
//   //   typography,
//   //   shape,
//   // });

// //   const DarkThemes = createTheme(Dark);
//   const LightTheme = createTheme(themeOptions);

//   return (
//     <StyledEngineProvider>
//       <ThemeProvider theme={LightTheme}>
//         <CssBaseline />
//         {props.children}
//       </ThemeProvider>
//     </StyledEngineProvider>
//   );
// };

// export default ThemeWrapper;

import { useMemo } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { palette } from './palette';
import { shadows } from './shadows';
import { overrides } from './overrides';
import { typography } from './typography';
import { customShadows } from './custom-shadows';

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }) {
  const memoizedValue = useMemo(
    () => ({
      palette: palette(),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(memoizedValue);

  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};