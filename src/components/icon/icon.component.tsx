import styled from '../../styles/theme.styles';

// Icon
// -----------------

interface IconProps {
  spacedVertical?: boolean;
  spacedHorizontal?: boolean;
}

export const Icon = styled<IconProps, 'img'>('img')(
  ({ theme, spacedVertical, spacedHorizontal }) => ({
    display: 'inline-block',
    padding: `
      ${spacedVertical ? theme.dimensions.module * 2 : 0}px
      ${spacedHorizontal ? theme.dimensions.module : 0}px
    `,
  })
);
