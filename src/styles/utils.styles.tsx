import { css } from 'react-emotion';
import { theme } from '../styles/theme.styles';

export const center = css({
  alignItems: 'center',
  textAlign: 'center',
});

export const hoverOpacity = css({
  ':hover': {
    opacity: .5,
    transition: `${theme.anim.fast} opacity ease-in-out`,
  },
});
