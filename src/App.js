import { createTheme, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './pages/Create';
import Notes from './pages/Notes';


// override defult theme
const theme = createTheme({
  palette: {
    // secondary: {
    //   main: "#efefef",
    // },
    secondary: {
      main: red[900], // colors are must've to imported from mui-colors
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
