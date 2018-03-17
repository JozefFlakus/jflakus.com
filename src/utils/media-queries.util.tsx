type BreakpointsMap = Record<string, number>;

export module MediaQueriesFactory {

  const minScreen = (breakpoints: BreakpointsMap, point: string) =>
    `@media (min-width: ${breakpoints[point]}px)`;

  export const getMinScreen = <T extends BreakpointsMap>(breakpoints: BreakpointsMap) => Object
    .keys(breakpoints)
    .reduce((obj, key) => ({ ...obj, [key]: minScreen(breakpoints, key) }), {}) as T;

}
