import Grid from '@mui/material/Grid';
import { Header } from './components/Header/Header';
import { ShowMovie } from './components/ShowMovie/ShowMovie';

const App = () => {
  return (
    <Grid container flexDirection='column' justifyContent='cenetr' alignItems='center'>
      <Header />
      <ShowMovie />
    </Grid>
  );
}

export default App;
