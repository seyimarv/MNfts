import SearchBar from '../Search';
import ThemeSwitcher from '../ThemeSwitcher';
import { Wrapper } from './styles';

const Header = ({ searchBy, setSearchBy }) => {
  return (
    <Wrapper>
      <SearchBar searchBy={searchBy} setSearchBy={setSearchBy} />
      <div>
        <ThemeSwitcher />
      </div>
    </Wrapper>
  );
};

export default Header;
