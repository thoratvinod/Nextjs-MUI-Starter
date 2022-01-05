import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
        main: '#556cd6',
        },
        secondary: {
        main: '#19857b',
        },
        error: {
        main: red.A400,
        },
    },
    typography: {
        fontFamily: [
            'Nunito',
            '"Segoe UI"',
            'sans-serif',
        ].join(','),
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: `
            html, 
            body {
                height: 100%;
            }
            @font-face {
              font-family: 'Nunito', sans-serif;
              font-display: swap;
            }
          `,
        },
    },
});

export default theme;
