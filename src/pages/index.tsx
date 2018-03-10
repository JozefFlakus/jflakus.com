import * as React from 'react';
import { center } from '../styles/utils.styles';
import { Headline, SubHeadline } from '../ui/typography.sc';
import { Container } from '../ui/containers.sc';
import { Icon } from '../ui/icons.sc';

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
