import { styled } from '@mui/material';

export const Wrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingBottom: '4rem',
  '.MuiContainer-root': {
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1440px',
      paddingLeft: '4rem',
      paddingRight: '4rem',
    },
  },
  '.MuiPaper-root': {
    background: theme.palette.primary.main,
    borderRadius: '20px',
  },
  '.MuiButton-root': {
    fontSize: '1.6rem !important',
    lineHeight: '.16rem',
    letterSpacing: '0rem',
    textTransform: 'normal',
  },
  '.MuiButton-outlined': {
    borderColor: theme.palette.blue.main,
    color: theme.palette.blue.main,

    '&:hover': {
      borderColor: theme.palette.blue.main,
    },
  },
  '.MuiButton-contained': {
    background: theme.palette.blue.main,
    color: `#ffffff !important`,

    '&:hover': {
      background: theme.palette.blue.main,
    },
  },
}));
