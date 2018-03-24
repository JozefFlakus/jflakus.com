import { css } from 'react-emotion';
import { theme } from '../styles/theme.styles';

export const center = css({
  alignItems: 'center',
  textAlign: 'center',
});

export const hoverOpacity = css({
  transition: `${theme.anim.fast} opacity ease-in-out`,

  ':hover': {
    opacity: .5,
    transition: `${theme.anim.fast} opacity ease-in-out`,
    cursor: 'pointer',
  },
});

export const link = css({
  textDecoration: 'none',
  color: theme.fontColor.default,
});

export const spacingTop = css({
  paddingTop: theme.dimensions.module * 2,
});

export const spacingBottom = css({
  paddingBottom: theme.dimensions.module * 2,
});

export const filterGrayscale = css({
  filter: 'grayscale(100%)',
});
