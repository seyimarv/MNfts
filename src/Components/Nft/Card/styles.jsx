import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  padding: '0.95rem 0.95rem 1.5rem',
  background: theme.palette.secondary.main,
  borderRadius: '30px',
  [theme.breakpoints.down(560)]: {
    maxWidth: '28rem',
    margin: 'auto',
    width: '100%',
  },
}));

export const CardImgWrapper = styled('div')({
  position: 'relative',
  paddingTop: '56.25%',
  height: '25rem',
});

export const CardImg = styled('img')({
  position: 'absolute',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  borderRadius: '20px',
  objectFit: 'cover',
});
