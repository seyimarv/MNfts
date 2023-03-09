/* eslint-disable no-unused-vars */
import { styled, Box, Select } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4rem',
  padding: '1rem 1.567rem',
  width: '60%',
  background: theme.palette.secondary.main,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    border: 'none',
  },
  input: {
    border: 'none',
    outline: 'none',
    marginLeft: '1.33rem',
    fontSize: '1.5rem',
    width: '100%',
    background: 'inherit',
    color: theme.palette.text.primary,
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: '8px',
  height: '3rem',
  legend: {
    display: 'none',
  },
  '.MuiSelect-icon': {
    fontSize: '1.5rem',
  },
  '& .MuiFormLabel-root': {},
  '&.MuiInputBase-root': {
    '& #validator-select': {
      padding: '12px 0px 12px 10px',
      fontSize: '1.2rem',
      fontWeight: 500,
    },
    '&.MuiOutlinedInput-notchedOutline': {
      borderColor: 'red !important',
    },
  },
}));
