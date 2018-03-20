import styled from '../../styles/theme.styles';

// Image
// -----------------

export const Image = styled<{}, 'img'>('img')(
  ({ theme }) => ({
    display: 'inline-block',
    width: '100%',
    maxWidth: '100%',
  })
);
