import * as React from 'react';
import { ThemeProvider, theme } from '../styles/theme.styles';
import { ContainerMain } from '../components/container';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { HeadFactory } from '../utils/head.util';

import '../styles/global.styles';

const TemplateWrapper: React.SFC<any> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      {HeadFactory.get({})}
      <Header />
      <ContainerMain>
        {children()}
      </ContainerMain>
      <Footer/>
    </>
  </ThemeProvider>
);

export default TemplateWrapper;
