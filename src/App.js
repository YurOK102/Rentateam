import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
