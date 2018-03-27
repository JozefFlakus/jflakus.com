import * as React from 'react';
import styled from '../../styles/theme.styles';
import { center, hoverOpacity } from '../../styles/utils.styles';
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
    zIndex: 10,
  })
);

export const Footer: React.SFC<{}> = () => (
  <FooterContainer className={center}>
    <a
      className={hoverOpacity}
      href={'https://github.com/JozefFlakus'}
      target={'_blank'}
    >
      <Icon
        src={require('../../assets/img/icon-github.svg')}
        spacedHorizontal={true}
      />
    </a>
    <a
      className={hoverOpacity}
      href={'https://twitter.com/jozflakus'}
      target={'_blank'}
    >
      <Icon
        src={require('../../assets/img/icon-twitter.svg')}
        spacedHorizontal={true}
      />
    </a>
    <a
      className={hoverOpacity}
      href={'https://linkedin.com/in/jozflakus'}
      target={'_blank'}
    >
      <Icon
        src={require('../../assets/img/icon-linkedin.svg')}
        spacedHorizontal={true}
      />
    </a>
  </FooterContainer>
);
