import * as React from 'react';
import { center } from '../styles/utils.styles';
import { Headline, SubHeadline } from '../ui/typography.ui';
import { Container } from '../ui/containers.ui';
import { Icon } from '../ui/icons.ui';

const IndexPage = () => (
  <main>
    <Container
      spaced={true}
      className={center}
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
