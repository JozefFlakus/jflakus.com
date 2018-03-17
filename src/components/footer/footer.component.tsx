import * as React from 'react';
import styled from '../../styles/theme.styles';
import { center } from '../../styles/utils.styles';
import { Icon } from '../icon';

// Footer
// -----------------

const FooterContainer = styled('footer')(
  ({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: theme.colorBg.white,
  })
);

export const Footer: React.SFC<{}> = () => (
  <FooterContainer className={center}>
    <Icon
      src={require('../../assets/img/icon-twitter.svg')}
      spacedHorizontal={true}
    />
    <Icon
      src={require('../../assets/img/icon-linkedin.svg')}
      spacedHorizontal={true}
    />
  </FooterContainer>
);
