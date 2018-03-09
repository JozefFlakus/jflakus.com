import styled, { FontSize } from '../styles/theme';

// Headline
// -----------------

interface HeadlineProps {
  fontSize?: FontSize;
}

export const Headline = styled<HeadlineProps, 'h1'>('h1')(
  ({ theme, fontSize }) => ({
    paddingBottom: theme.dimensions.module * 2,
    fontWeight: 200,
    fontSize: fontSize
      ? theme.fontSize[fontSize]
      : theme.fontSize.huge,
    fontFamily: theme.font.main,
    color: theme.fontColor.default,
  })
);

// SubHeadline
// -----------------

export const SubHeadline = Headline.withComponent('h2');
