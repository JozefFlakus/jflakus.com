import { MediaQueriesFactory } from './media-queries.util';

export type Point = [number, number];
export type SizeMap = Array<Point>;

export const linearInterpolation = (
  point1: Point,
  point2: Point,
  factorize?: (m: number, b: number) => any,
) => {
  const x1 = point1[0];
  const x2 = point2[0];
  const y1 = point1[1];
  const y2 = point2[1];

  const m = (y2 - y1) / (x2 - x1);
  const b = y1 - m * x1;

  return !!factorize
    ? factorize(m, b)
    : { m, b };
};

export const polyFluidSizing = (property: string, map: SizeMap) => {

  const getViewport = (i: number) => i < map.length ? map[i][0] : 0;

  const getValue = (i: number) => i < map.length ? map[i][1] : 0;

  const getInterpolationLimit = () => {
    const lastIndex = map.length - 1;
    const mediaViewport = getViewport(lastIndex);
    const value = getValue(lastIndex);
    const minMedia = MediaQueriesFactory.getMinMedia(mediaViewport);
    return {
      [minMedia]: { [property]: value },
    };
  };

  const getInterpolatedCalc = (m: number, b: number) => {
    const sign = b < 0 ? '-' : '+';
    return `calc(${m * 100}vw ${sign} ${b < 0 ? Math.abs(b) : b}px)`;
  };

  const factorizeProperty = (i: number) => {
    const currentViewport = getViewport(i);
    const nextViewport = getViewport(i + 1);
    const currentValue = getValue(i);
    const nextValue = getValue(i + 1);

    const calculatedValue = currentValue !== nextValue
      ? linearInterpolation(
          [currentViewport, currentValue],
          [nextViewport, nextValue],
          getInterpolatedCalc
        )
      : currentValue;

    return { [property]: calculatedValue };
  };

  if (map.length < 2) {
    throw new Error('polyFluidSizing "map" requires at least 2 points');
  }

  const object = map.reduce(
    (obj, point, i) => {
      const mediaViewport = getViewport(i);
      const minMedia = MediaQueriesFactory.getMinMedia(mediaViewport);
      return {
        ...obj,
        [minMedia]: factorizeProperty(i),
      };
    },
    { [property]: getValue(0) } as Record<string, any>,
  );

  return {
    ...object,
    ...getInterpolationLimit(),
  };
};
