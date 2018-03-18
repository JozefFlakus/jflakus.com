import { polyFluidSizing, linearInterpolation, Point } from './poly-fluid-sizing.util';

describe('#polyFluidSizing', () => {

  it('throws error if map contains less than 2 map points', () => {
    expect(() =>
      polyFluidSizing('fontSize', [[300, 16]])
    ).toThrowError();
  });

  it('generates poly-fluid-sized object for two-point map', () => {
    const object = polyFluidSizing('fontSize', [[300, 16], [1024, 30]]) as any;
    expect(object.fontSize).toBe(16);
    expect(object[`@media (min-width: 300px)`].fontSize).toBeDefined();
    expect(object[`@media (min-width: 1024px)`].fontSize).toBe(30);
  });

  it('generates poly-fluid-sized object for three-point map', () => {
    const object = polyFluidSizing('fontSize', [[300, 16], [1024, 30], [1280, 36]]) as any;
    expect(object.fontSize).toBe(16);
    expect(object[`@media (min-width: 300px)`].fontSize).toBeDefined();
    expect(object[`@media (min-width: 1024px)`].fontSize).toBeDefined();
    expect(object[`@media (min-width: 1280px)`].fontSize).toBe(36);
  });

});

describe('#linearInterpolation', () => {

  let POINT_1: Point;
  let POINT_2: Point;

  it('interpolates properly with factorize function', () => {
    POINT_1 = [10, 5];
    POINT_2 = [50, 15];
    const factorizeFunc = (m, b) => ({ m, b });
    const { m, b } = linearInterpolation(POINT_1, POINT_2, factorizeFunc);
    expect(m).toBe(0.25);
    expect(b).toBe(2.5);
  });

  it('interpolates properly without factorize function', () => {
    POINT_1 = [10, 5];
    POINT_2 = [50, 15];
    const { m, b } = linearInterpolation(POINT_1, POINT_2);
    expect(m).toBe(0.25);
    expect(b).toBe(2.5);
  });

})
