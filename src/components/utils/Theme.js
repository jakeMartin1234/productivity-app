import { createTheme } from '@mui/material/styles';
import {green, amber, red} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: amber,
        secondary: red,
    },
    typography: {
        body1: {
            color: 'white',
            fontSize: '1.5rem',
        },
        body2: {
            color: 'black',
            fontSize: '1.3rem',
        },
    },
});

export default theme;
