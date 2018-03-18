import styled, { ColorBg } from '../../styles/theme.styles';

// Container
// -----------------

interface ContainerProps {
  bg?: ColorBg;
  spaced?: boolean;
}

export const Container = styled<ContainerProps, 'div'>('div')(
  ({ theme, color, spaced }) => ({
    paddingTop: spaced ? theme.dimensions.module * 6 : 0,
    paddingBottom: spaced ? theme.dimensions.module * 6 : 0,
    backgroundColor: color || theme.colorBg.white,

    [theme.media.minScreen.xl]: {
      paddingTop: spaced ? theme.dimensions.module * 12 : 0,
      paddingBottom: spaced ? theme.dimensions.module * 12 : 0,
    },
  })
);

// Container-Main
// -----------------

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
