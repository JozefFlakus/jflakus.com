import * as React from 'react';
import { center } from '../styles/utils.styles';
import { Headline, SubHeadline } from '../components/typography';
import { Container } from '../components/container';
import { Icon } from '../components/icon';

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
        fontSize={'small'}
      >
        programmer / ninja
      </SubHeadline>
      <Icon
        spacedTop={true}
        src={require('../assets/img/icon-lion.svg')}
      />
    </Container>
  </main>
);

export default IndexPage;
