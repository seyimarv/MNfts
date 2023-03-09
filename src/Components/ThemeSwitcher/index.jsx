import { IconButton, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useColorMode from '../../hooks/useColorMode';

const ThemeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const theme = useTheme();
  return (
    <IconButton
      onClick={toggleColorMode}
      sx={{
        '.MuiSvgIcon-root': {
          fontSize: '2rem',
        },
      }}
    >
      {theme.palette.mode === 'light' ? (
        <DarkModeIcon
          sx={{
            fill: '#121212',
          }}
        />
      ) : (
        <LightModeIcon />
      )}
    </IconButton>
  );
};

export default ThemeSwitcher;
