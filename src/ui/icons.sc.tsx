import styled from '../styles/theme';

interface IconProps {
  spacedTop?: boolean;
  spacedBottom?: boolean;
}

export const Icon = styled<IconProps, 'img'>('img')(
  ({ theme, spacedTop, spacedBottom }) => ({
    display: 'inline-block',
    paddingTop: spacedTop ? theme.dimensions.module * 2 : 0,
    paddingBottom: spacedBottom ? theme.dimensions.module * 2 : 0,
  })
);
