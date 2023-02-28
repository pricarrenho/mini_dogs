const colors = {
  black: "#000000",
  white: "#FFFFFF",
  red: "#FF0000",
};

const font = {
  family: "IBM Plex Sans",
  sizes: {
    sm: "1.6rem",
    md: "2.0rem",
    lg: "2.4rem",
  },
};

export const themeWhite = {
  colors: {
    ...colors,
    background: colors.white,
  },
  font,
};
