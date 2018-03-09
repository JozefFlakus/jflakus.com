import * as React from 'react';
import { css } from 'react-emotion';
import { Headline, SubHeadline } from '../ui/typography.sc';
import { Icon } from '../ui/icons.sc';
import { Container } from '../ui/containers.sc';

const centerItems = css({
  alignItems: 'center',
  textAlign: 'center',
});

const IndexPage = () => (
  <main>
    <Container
      spaced={true}
      className={centerItems}
    >
      <Headline>
        jozef.flakus
      </Headline>
      <SubHeadline
        fontSize={'tiny'}
      >
        programmer / @barista creator
      </SubHeadline>
      <Icon
        spacedTop={true}
        src={require('../assets/img/icon-lion.svg')}
      />
    </Container>
  </main>
);

export default IndexPage;
