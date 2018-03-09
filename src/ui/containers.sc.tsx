import styled, { ColorBg } from '../styles/theme';

interface ContainerProps {
  bg?: ColorBg;
  spaced?: boolean;
}

export const Container = styled<ContainerProps, 'div'>('div')(
  ({ theme, color, spaced }) => ({
    padding: spaced ? theme.dimensions.module * 12 : 0,
    backgroundColor: color || theme.colorBg.white,
  })
);

export const ContainerMain = styled<{}, 'div'>('div')(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minHeight: '100vh',

    '&::after': {
      content: `''`,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: '50%',
      borderRightWidth: 1,
      borderRightStyle: 'solid',
      borderRightColor: theme.util.lineColor,
      zIndex: -1,
    },
  })
);
