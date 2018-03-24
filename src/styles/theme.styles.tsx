import styled, { ThemedReactEmotionInterface } from 'react-emotion';
import { ThemeProvider as EmothionThemingProvider } from 'emotion-theming';
import { Color } from '../utils/color.util';
import { MediaQueriesFactory } from '../utils/media-queries.util';

export const breakpoints = {
  sm: 320,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
};

export const theme = {
  font: {
    main: 'Inconsolata',
  },
  fontColor: {
    default: '#4A4A4A',
  },
  fontSize: {
    tiny:    12,
    small:   14,
    default: 16,
    medium:  20,
    big:     24,
    large:   30,
    huge:    36,
  },
  media: {
    minScreen: MediaQueriesFactory.getMinScreen<typeof breakpoints>(breakpoints),
    point: breakpoints,
  },
  dimensions: {
    module: 8,
  },
  colorBg: {
    white: '#FFF',
  },
  util: {
    lineColor: Color.hexToRGB('#484848', .2),
  },
  anim: {
    fast: '0.3s',
    mid:  '0.6s',
    slow: '1.0s',
  },
};

export type Breakpoint = keyof typeof breakpoints;
export type ColorBg = keyof typeof theme.colorBg;
export type FontSize = keyof typeof theme.fontSize;
export type FontColor = keyof typeof theme.fontColor;
export type Font = keyof typeof theme.font;

export default styled as ThemedReactEmotionInterface<typeof theme>;
export const ThemeProvider = EmothionThemingProvider as any;
