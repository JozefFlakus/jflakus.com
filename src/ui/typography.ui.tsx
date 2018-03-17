import styled, { FontSize } from '../styles/theme.styles';

// Headline
// -----------------

interface HeadlineProps {
  fontSize?: FontSize;
  uppercase?: boolean;
}

export const Headline = styled<HeadlineProps, 'h1'>('h1')(
  ({ theme, fontSize, uppercase }) => ({
    paddingBottom: theme.dimensions.module * 2,
    fontWeight: 200,
    fontSize: fontSize
      ? theme.fontSize[fontSize]
      : theme.fontSize.huge,
    fontFamily: theme.font.main,
    color: theme.fontColor.default,
    textTransform: uppercase ? 'uppercase' : 'normal',
  })
);

// SubHeadline
// -----------------

export const SubHeadline = Headline.withComponent('h2');
