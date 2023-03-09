const getTheme = (mode) => ({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '62.5%',
          '& ::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
          },

          '& ::-webkit-scrollbar-track': {
            boxShadow: `inset 0 0 5px #fff`,
            borderRadius: '10px',
          },
          '& ::-webkit-scrollbar-thumb': {
            backgroundColor: '#333',
            borderRadius: '10px',
          },
          '& ::-webkit-scrollbar-thumb:hover': {},
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 999,
      lg: 1239,
      xl: 1488,
    },
  },
  typography: {
    fontSize: 11,
    fontFamily: 'ubuntu',
    fontWeightRegular: 'normal',
    h1: {
      fontSize: '3.6rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.9rem',
      lineHeight: '5rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '2.4rem',
      lineHeight: '3.6rem',
      fontWeight: 600,
      letterSpacing: 0.5,
    },
    h4: {
      fontSize: '2.2rem',
      fontWeight: 600,
      lineHeight: '3.3rem',
    },
    h5: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: '2.6rem',
    },
    h6: {
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: '2.4rem',
      letterSpacing: 0.5,
    },
    subtitle1: {
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: '1.3rem',
    },
    subtitle2: {
      fontSize: '1.3rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1.8rem',
      lineHeight: '2.6rem',
      letterSpacing: -0.25,
    },
    body2: {
      fontSize: '1.6rem',
      lineHeight: '2.4rem',
    },
    body3: {
      fontSize: '1.2rem',
      lineHeight: '1.8rem',
    },
    label: {
      fontSize: '1.4rem',
      lineHeight: '1.4rem',
      fontWeight: 500,
    },
    caption: {
      fontSize: '1rem',
    },
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#4E4C67',
          },
          secondary: {
            main: '#eef1f7',
          },
          background: {
            default: '#FFFFFF',
          },
          white: {
            main: '#fffff',
          },
          blue: {
            main: 'rgb(32, 129, 226)',
          },
          text: {
            primary: '#333333',
          },
          accent: {
            main: '#CDDC39',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#EDE7F6',
          },
          secondary: {
            main: '#282828',
          },
          background: {
            default: '#121212',
          },
          text: {
            primary: '#FFFFFF',
          },
          blue: {
            main: 'rgb(32, 129, 226)',
          },
          white: {
            main: '#fffff',
          },
          accent: {
            main: '#8BC34A',
          },
        }),
  },
});

export default getTheme;
