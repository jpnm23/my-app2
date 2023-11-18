import React from 'react';
import './App.css';
import Usernames from './components/usernames'
import { ThemeProvider, createTheme, makeStyles } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "rgba(255, 255, 255, 0.7)" 
    }
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
});




// const useStyles = makeStyles({
//   button: {
//     "&.active": {
//       background:'black',
//     },
//   },
// });


function App() {
const matches = useMediaQuery('(max-width:600px)', { noSsr: false });
  
const mobileTheme = matches ? {
} : {
  display: "inline-block",
  maxWidth: "30%"
}

  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main className="App" style={mobileTheme}>
          <Usernames />
      </main>
    </ThemeProvider>
  );
}

export default App;
