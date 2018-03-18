import styled, { FontSize, theme, breakpoints as bp } from '../../styles/theme.styles';
import { polyFluidSizing as pfs } from '../../utils/poly-fluid-sizing.util';

const { fontSize } = theme;

// Headline
// -----------------

interface HeadlineProps {
  fontSize?: FontSize;
  uppercase?: boolean;
}

const headlineFontSize = {
  tiny:    pfs('fontSize', [[bp.sm, 8],  [bp.xl, fontSize.tiny]]),
  small:   pfs('fontSize', [[bp.sm, 10], [bp.xl, fontSize.small]]),
  default: pfs('fontSize', [[bp.sm, 12], [bp.xl, fontSize.default]]),
  medium:  pfs('fontSize', [[bp.sm, 14], [bp.xl, fontSize.medium]]),
  big:     pfs('fontSize', [[bp.sm, 18], [bp.xl, fontSize.big]]),
  large:   pfs('fontSize', [[bp.sm, 20], [bp.xl, fontSize.large]]),
  huge:    pfs('fontSize', [[bp.sm, 24], [bp.xl, fontSize.huge]]),
}

export const Headline = styled<HeadlineProps, 'h1'>('h1')(
  ({ theme, fontSize = 'huge', uppercase }) => ({
    paddingBottom: theme.dimensions.module * 2,
    fontWeight: 200,
    fontFamily: theme.font.main,
    fontSize: theme.fontSize.huge,
    color: theme.fontColor.default,
    textTransform: uppercase ? 'uppercase' : 'normal',
    ...(fontSize && headlineFontSize[fontSize]),
  })
);

// SubHeadline
// -----------------

export const SubHeadline = Headline.withComponent('h2');
