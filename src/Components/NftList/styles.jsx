import { styled } from '@mui/material';

export const List = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(25rem, 1fr))',
  gap: '3rem',
});
