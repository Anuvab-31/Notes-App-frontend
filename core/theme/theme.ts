'use client';

import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    brownish: Palette['primary'];
    yellowish: Palette['primary'];
    blackish: Palette['primary'];
  }
  interface PaletteOptions {
    brownish: PaletteOptions['primary'];
    yellowish: PaletteOptions['primary'];
    blackish: PaletteOptions['primary'];
  }
}
declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    brownish: true;
    yellowish: true;
    blackish: true;
  }
}


export const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#E71C34",
      contrastText: '#fff'
    },
    secondary: {
      main: "#3860C7",
      light: "#DFE6F6",
      contrastText: '#fff'
    },
    brownish: {
      main: "#7D4C1F",
      light: "#CC7C33",
      dark: "#523214",
      contrastText: '#fff'
    },
    yellowish: {
      main: "#F99100",
      // light: "#CC7C33",
      // dark: "#523214",
      contrastText: '#fff'
    },
    blackish: {
      main: "#1F1F1F",
      // light: "#CC7C33",
      // dark: "#523214",
      contrastText: '#1F1F1F'
    },
    text: {
      primary: "#434D56",
      disabled: "rgba(0, 0, 0, 0.38)",
      secondary: '#434D56'
    },
    background: {
      paper: "#ffffff",
      default: "#F3F5F7",
    },
    divider: "#D4D4D4",
  },
  typography: {
    fontFamily: "var(--font-lexend)",
    button: {
      textTransform: "capitalize",
      height: "40px",
      padding: "0px, 20px, 0px, 16px",
      fontSize: "12px",
      fontWeight: 500,
    },
  },
  mixins: {
    toolbar: {
      minHeight: '50px',
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          // height: "15px",
          fontWeight: 400,
          fontSize: "14px"
        }
      }
    },
  }
});


// const MyComponent = () => {
//   const { myObject } = useMyContext();

//   const theme = createTheme({
//     palette: {
//       common: {
//         black: "#000",
//         white: "#fff",
//       },
//       primary: {
//         main: myObject?.user?.color_code,
//         contrastText: '#fff'
//       },
//       secondary: {
//         main: "#3860C7",
//         light: "#DFE6F6",
//         contrastText: '#fff'
//       },
//       brownish: {
//         main: "#7D4C1F",
//         light: "#CC7C33",
//         dark: "#523214",
//         contrastText: '#fff'
//       },
//       yellowish: {
//         main: "#F99100",
//         contrastText: '#fff'
//       },
//       blackish: {
//         main: "#1F1F1F",
//         contrastText: '#1F1F1F'
//       },
//       text: {
//         primary: "#434D56",
//         disabled: "rgba(0, 0, 0, 0.38)",
//         secondary: '#434D56'
//       },
//       background: {
//         paper: "#ffffff",
//         default: "#F3F5F7",
//       },
//       divider: "#D4D4D4",
//     },
//     typography: {
//       fontFamily: "var(--font-lexend)",
//       button: {
//         textTransform: "capitalize",
//         height: "40px",
//         padding: "0px, 20px, 0px, 16px",
//         fontSize: "12px",
//         fontWeight: 500,
//       },
//     },
//     mixins: {
//       toolbar: {
//         minHeight: '50px',
//       },
//     },
//     components: {
//       MuiInputBase: {
//         styleOverrides: {
//           input: {
//             fontWeight: 400,
//             fontSize: "14px"
//           }
//         }
//       },
//     }
//   });

//   return theme
// };

// export default MyComponent;
