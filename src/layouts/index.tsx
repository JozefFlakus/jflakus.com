import * as React from 'react';
import { ThemeProvider, theme } from '../styles/theme.styles';
import { ContainerMain } from '../ui/containers.sc';
import '../styles/global.styles';

const TemplateWrapper: React.SFC<any> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ContainerMain>
      {children()}
    </ContainerMain>
  </ThemeProvider>
);

export default TemplateWrapper;
