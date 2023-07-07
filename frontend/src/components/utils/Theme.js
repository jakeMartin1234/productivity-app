import { createTheme } from '@mui/material/styles';
import {amber, deepPurple} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: deepPurple,
        secondary: amber,
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
