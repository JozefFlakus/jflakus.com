import * as React from 'react';
import Link from 'gatsby-link';
import { cx } from 'react-emotion';
import styled from '../../styles/theme.styles';
import { center, link, hoverOpacity } from '../../styles/utils.styles';
import { SubHeadline } from '../typography';

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
    zIndex: 10,
  })
);

export const Header: React.SFC<{}> = () => (
  <HeaderContainer className={center}>
    <SubHeadline
      fontSize={'default'}
      transform={'uppercase'}
    >
      <Link to={'/'} className={cx(link, hoverOpacity)}>
        jflakus.com
      </Link>
    </SubHeadline>
  </HeaderContainer>
);
