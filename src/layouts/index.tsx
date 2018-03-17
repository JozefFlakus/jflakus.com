import * as React from 'react';
import { ThemeProvider, theme } from '../styles/theme.styles';
import { ContainerMain } from '../ui/containers.ui';
import { Header } from '../ui/header.ui';
import { Footer } from '../ui/footer.ui';

import '../styles/global.styles';

const TemplateWrapper: React.SFC<any> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header />
      <ContainerMain>
        {children()}
      </ContainerMain>
      <Footer/>
    </>
  </ThemeProvider>
);

export default TemplateWrapper;
