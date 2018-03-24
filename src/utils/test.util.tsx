import * as React from 'react';
import { ThemeProvider, theme } from '../styles/theme.styles';
import { ReactNode } from 'react';

export const testWithTheme = (styledComponent: ReactNode) => (
  <ThemeProvider theme={theme}>
    {styledComponent}
  </ThemeProvider>
);
