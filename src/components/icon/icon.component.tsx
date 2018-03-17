import styled from '../../styles/theme.styles';

// Icon
// -----------------

interface IconProps {
  spacedTop?: boolean;
  spacedBottom?: boolean;
  spacedHorizontal?: boolean;
}

export const Icon = styled<IconProps, 'img'>('img')(
  ({ theme, spacedTop, spacedBottom, spacedHorizontal }) => ({
    display: 'inline-block',
    paddingTop: spacedTop ? theme.dimensions.module * 2 : 0,
    paddingBottom: spacedBottom ? theme.dimensions.module * 2 : 0,
    paddingLeft: spacedHorizontal ? theme.dimensions.module : 0,
    paddingRight: spacedHorizontal ? theme.dimensions.module : 0,
  })
);
