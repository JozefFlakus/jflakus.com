import * as React from 'react';
import Link from 'gatsby-link';
import { cx } from 'react-emotion';
import { Headline, Text } from '../components/typography';
import { Container } from '../components/container';
import { Image } from '../components/image';
import { spacingBottom, filterGrayscale, hoverOpacity } from '../styles/utils.styles';

const NotFoundPage = () => (
  <Container
    bgColor={'white'}
    spaced={true}
  >
    <Headline>
      🐼 NOT FOUND
    </Headline>
    <Text fontSize={'small'}>
      These aren't the <strong>Pandas</strong> you are looking for...
    </Text>
    <Link to={'/'}>
      <Image
        className={cx(spacingBottom, filterGrayscale, hoverOpacity)}
        src={require('../assets/gifs/homer.gif')}
      />
    </Link>
    <Text fontSize={'tiny'} align={'right'}>
      Yep, just like that
    </Text>
  </Container>
);

export default NotFoundPage;
