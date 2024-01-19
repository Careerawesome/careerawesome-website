import { alpha } from "@mui/material/styles";


type GradientColor = {
  lighter?: string;
  light: string;
  main: string;
  dark: string;
  darker?: string;
  darkest?: string;
  contrastText?: string;
};
// Extend the MUI Theme interface to include 'accent'
declare module '@mui/material/styles' {
  interface Palette {
    accent: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
      darkest: string;
      contrastText: string;
    };
  }
  interface PaletteOptions {
    accent?: {
      lighter?: string;
      light?: string;
      main?: string;
      dark?: string;
      darker?: string;
      darkest?: string;
      contrastText?: string;
    };
  }
}

function createGradient(color1: string, color2: string): string {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}
// SETUP GREY COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

// CA Color Palette
const PRIMARY = {
  lighter: "#6D9EEB",
  light: "#4B89D6",
  main: "#1E6BCD",
  dark: "#1858A8",
  darker: "#134391",
  darkest: "#0E2E7B",
  contrastText: "#fff",
};

const SECONDARY = {
  light: "#5D6D7E",
  main: "#36454F",
  dark: "#2C3E50",
  darker: "#232A33",
  darkest: "#1B2026",
  contrastText: "#fff",
};

const ACCENT = {
  lighter: "#FF9E9E",   // Lighter shade of Soft Coral
  light: "#FF8989",     // Light shade of Soft Coral
  main: "#FF6B6B",      // Soft Coral
  dark: "#E65050",      // Dark shade of Soft Coral
  darker: "#CC3636",    // Darker shade of Soft Coral
  darkest: "#B31F1F",   // Darkest shade of Soft Coral
  contrastText: "#fff", // Contrast text color for readability
};


const INFO = {
  lighter: "#90CAF9",
  light: "#64B5F6",
  main: "#36BFBF", //#167ed8
  dark: "#1E88E5",
  darker: "#1565C0",
  darkest: "#0D47A1",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#C8E6C9",
  light: "#A5D6A7",
  main: "#81C784",
  dark: "#66BB6A",
  darker: "#4CAF50",
  darkest: "#388E3C",
  contrastText: "#fff",
};

const WARNING = {
  lighter: "#FFE082",
  light: "#FFD54F",
  main: "#FFCA28",
  dark: "#FFC107",
  darker: "#FFB300",
  darkest: "#FFA000",
  contrastText: "#fff",
};

const ERROR = {
  lighter: "#FF9E80",
  light: "#FF6E40",
  main: "#FF3D00",
  dark: "#DD2C00",
  darker: "#D84315",
  darkest: "#BF360C",
  contrastText: "#fff",
};

// Gradients
const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  secondary: createGradient(SECONDARY.light, SECONDARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

// Palette
const palette = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  accent: ACCENT,
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;