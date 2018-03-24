import * as React from 'react';
import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';
import * as renderer from 'react-test-renderer';
import { Container } from './container.component';
import { testWithTheme } from '../../utils/test.util';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('<Container>', () => {
  it('renders correctly', () => {
    const component = testWithTheme(<Container>Test</Container>);
    const result = renderer.create(component).toJSON();
    expect(result).toMatchSnapshot();
  });
});
