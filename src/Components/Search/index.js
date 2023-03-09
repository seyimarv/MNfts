import { Wrapper, StyledSelect } from './styles';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormControl, MenuItem } from '@mui/material';

const SearchBar = ({ searchBy, setSearchBy }) => {
  const [searchValue, setSearchValue] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);

  const handleClose = () => {
    setOpenSelect(false);
  };

  const handleChange = (event) => {
    setSearchBy(event.target.value);
  };

  const handleOpen = () => {
    setOpenSelect(true);
  };
  let [, setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const search = () => {
    if (searchValue) {
      setSearchParams({
        address: searchValue,
      });
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };
  return (
    <Wrapper>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <StyledSelect
          labelId="validator-select-label"
          id="validator-select"
          open={openSelect}
          onClose={handleClose}
          onOpen={handleOpen}
          value={searchBy}
          label="Search By"
          onChange={handleChange}
        >
          <MenuItem value="ownerAddress">Owner address</MenuItem>
          <MenuItem value="contractAddress">Contract address</MenuItem>
        </StyledSelect>
      </FormControl>
      <input
        placeholder="Paste a address and click enter to find NFTS"
        onKeyDown={handleKeyDown}
        onChange={handleSearch}
      />
    </Wrapper>
  );
};

export default SearchBar;
