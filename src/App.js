import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Notes from './pages/Notes';
import Create from './pages/Create';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      light: '#73e8ff',
      main: '#29b6f6',
      dark: '#0086c3'
    },
    secondary: {
      light: '#8e99f3',
      main: '#5c6bc0',
      dark: '#26418f'
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: '400',
    fontWeightRegular: '500',
    fontWeightMedium: '600',
    fontWeightBold: '700'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Notes />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
