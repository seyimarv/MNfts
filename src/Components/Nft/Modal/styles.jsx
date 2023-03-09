/* eslint-disable no-unused-vars */
import { Box, Dialog, Paper, styled } from '@mui/material';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  zIndex: 20000,
  background: 'rgba(8, 19, 44, 0.6)',
  backdropFilter: 'blur(2px)',
  textAlign: 'center',
  '.MuiButton-root': {
    fontSize: '1.6rem',
    lineHeight: '.16rem',
    letterSpacing: '0rem',
    textTransform: 'normal',
    padding: '20px',
    background: theme.palette.blue.main,
    color: '#ffffff',
  },
  '& .MuiPaper-root': {
    maxWidth: '1000px',
    height: '100%',
    padding: '2.6rem',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxHeight: '700px',
    },
  },
}));

export const DialogContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  overflowY: 'scroll',
  gap: '3rem',
  ' ::-webkit-scrollbar': {
    display: 'none',
  },
  '> *': {
    flex: '1 1 0px',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const NftImage = styled('img')(({ theme }) => ({
  borderRadius: '1rem',
  objectFit: 'cover',
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
}));

export const NftContent = styled('div')({
  textAlign: 'left',
  overflowY: 'scroll',
  ' ::-webkit-scrollbar': {
    display: 'none',
  },
});

export const NftSummary = styled('div')(({ theme }) => ({
  marginTop: '2rem',
  padding: '2rem',
  background: theme.palette.secondary.main,
  borderRadius: '10px',

  '.MuiDivider-root': {
    marginLeft: '-2rem',
    marginRight: '-2rem',
  },
}));

export const SectionTitle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  padding: '1rem 0rem',
  p: {
    fontWeight: '600',
  },
  '.MuiSvgIcon-root': {
    fontSize: '1.6rem',
  },
});

export const SectionBody = styled(Box)({
  padding: '2rem 0rem',
});
