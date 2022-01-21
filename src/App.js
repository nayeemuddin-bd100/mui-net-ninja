
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './pages/Create';
import FormComp from './pages/FormComp';
import GridComp from './pages/GridComp';
import Layout from './pages/Layout';
import Notes from './pages/Notes';
import Test from './pages/Test';
// import Test from './pages/Test';


// override defult theme
// const theme = createTheme({
//   palette: {
//     // secondary: {
//     //   main: "#efefef",
//     // },
//     secondary: {
//       main: red[900], // colors are must've to imported from mui-colors
//     }import GridComp from './pages/GridComp';


//   },
// });

function App() {
  return (
    // <ThemeProvider theme={theme}>
      <Router>
        <Layout>
        <Switch>
          <Route exact path="/">
            <Notes/>
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/form">
            <FormComp/>
          </Route>
          <Route path="/grid">
            <GridComp/>
          </Route>
        </Switch>
        </Layout>
      </Router>
    // </ThemeProvider>
  );
}

export default App;
