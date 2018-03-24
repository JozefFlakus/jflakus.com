import styled, { ColorBg } from '../../styles/theme.styles';

// Container
// -----------------

interface ContainerProps {
  bgColor?: ColorBg;
  spaced?: boolean;
}

export const Container = styled<ContainerProps, 'div'>('div')(
  ({ theme, bgColor, spaced }) => ({
    padding: spaced ? '100px 0' : 0,
    backgroundColor: !!(theme.colorBg) && theme.colorBg[bgColor],
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
    padding: `0 ${theme.dimensions.module * 2}px`,

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
