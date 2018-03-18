type BreakpointsMap = Record<string, number>;

export module MediaQueriesFactory {

  export const getMinMedia = (point: number) =>
    `@media (min-width: ${point}px)`;

  export const getMinScreen = <T extends BreakpointsMap>(breakpoints: BreakpointsMap) => Object
    .keys(breakpoints)
    .reduce((obj, key) => ({ ...obj, [key]: getMinMedia(breakpoints[key]) }), {}) as T;

}
