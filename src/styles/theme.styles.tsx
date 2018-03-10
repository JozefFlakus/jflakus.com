import styled, { ThemedReactEmotionInterface } from 'react-emotion';
import { ThemeProvider as EmothionThemingProvider } from 'emotion-theming';
import { Color } from '../utils';

export const theme = {
  font: {
    main: 'Inconsolata',
  },
  fontColor: {
    default: '#4A4A4A',
  },
  fontSize: {
    huge:    36,
    large:   30,
    big:     24,
    medium:  20,
    default: 18,
    small:   14,
    tiny:    12,
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
};

export type ColorBg = keyof typeof theme.colorBg;
export type FontSize = keyof typeof theme.fontSize;
export type FontColor = keyof typeof theme.fontColor;
export type Font = keyof typeof theme.font;

export default styled as ThemedReactEmotionInterface<typeof theme>;
export const ThemeProvider = EmothionThemingProvider as any;
