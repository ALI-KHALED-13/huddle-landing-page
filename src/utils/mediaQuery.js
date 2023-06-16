

export const getBreakPoint = (breakpoint) => {
  const breakpoints = {
    "md": 768,
    "lg": 1440,
  };
  return breakpoints[breakpoint];
}

export const mediaQuery = (breakpoint) => {
  return `@media only screen and (min-width: ${getBreakPoint(breakpoint)}px)`;
};
