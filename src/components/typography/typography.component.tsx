import styled, { FontSize, theme, breakpoints as bp } from '../../styles/theme.styles';
import { polyFluidSizing as pfs } from '../../utils/poly-fluid-sizing.util';

const { fontSize } = theme;

interface TextProps {
  fontSize?: FontSize;
  transform?: 'uppercase' | 'lowercase';
  align?: 'left' | 'center' | 'right';
}

const textFontSize = {
  tiny:    pfs('fontSize', [[bp.sm, 8],  [bp.xl, fontSize.tiny]]),
  small:   pfs('fontSize', [[bp.sm, 10], [bp.xl, fontSize.small]]),
  default: pfs('fontSize', [[bp.sm, 12], [bp.xl, fontSize.default]]),
  medium:  pfs('fontSize', [[bp.sm, 14], [bp.xl, fontSize.medium]]),
  big:     pfs('fontSize', [[bp.sm, 18], [bp.xl, fontSize.big]]),
  large:   pfs('fontSize', [[bp.sm, 20], [bp.xl, fontSize.large]]),
  huge:    pfs('fontSize', [[bp.sm, 24], [bp.xl, fontSize.huge]]),
};

const commonStyles = ({ align, transform, fontSize }: TextProps) => ({
  paddingBottom: theme.dimensions.module * 2,
  fontWeight: 200,
  fontFamily: theme.font.main,
  fontSize: theme.fontSize.default,
  color: theme.fontColor.default,
  textTransform: transform,
  textAlign: align,
});

// Text
// -----------------

export const Text = styled<TextProps, 'p'>('p')(
  ({ theme, fontSize = 'default', ...props }) => ({
    ...commonStyles(props),
    ...(fontSize && textFontSize[fontSize]),
  })
);

// Headline
// -----------------

export const Headline = styled<TextProps, 'h1'>('h1')(
  ({ theme, fontSize = 'huge', ...props }) => ({
    ...commonStyles(props),
    ...(fontSize && textFontSize[fontSize]),
  })
);

// SubHeadline
// -----------------

export const SubHeadline = Headline.withComponent('h2');
