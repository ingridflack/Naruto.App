const theme = {
  colors: {
    background: "#f1f1f1",

    gray: {
      platinum: "#e1e1e6",
      silver: "#a8a8b3",
      dark: "#141414",
    },

    primary: "#ff8b38",
    secondary: "#16396b",
  },
  fontSize: {
    small: "0.75rem",
    medium: "0.875rem",
    normal: "1rem",
    large: "1.5rem",
  },
} as const;

export type Theme = typeof theme;

export default theme;
