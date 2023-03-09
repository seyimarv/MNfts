import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

const useColorMode = () => {
  const { colorMode } = useContext(ThemeContext);
  return colorMode;
};

export default useColorMode;
