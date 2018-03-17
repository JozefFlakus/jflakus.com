import * as React from 'react';
import styled from '../styles/theme.styles';
import { center } from '../styles/utils.styles';
import { SubHeadline } from './typography.ui';

// Header
// -----------------

export const HeaderContainer = styled('header')(
  ({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: theme.colorBg.white,
  })
);

export const Header: React.SFC<{}> = () => (
  <HeaderContainer className={center}>
    <SubHeadline
      fontSize={'medium'}
      uppercase={true}
    >
      Hello
    </SubHeadline>
  </HeaderContainer>
);
