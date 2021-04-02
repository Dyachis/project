import './App.css';
import Header from './blocs/1_top/Header'
import Footer from './blocs/3_bot/Footer'
import Mid from './blocs/2_mid/Mid'
import AppContainer from './blocs/style/containers/AppContainer'
import withContext from './context/withContext'

function App({ context }) {

  return (
    <AppContainer>
        <Header/>
        <Mid/>
        <Footer/>
    </AppContainer>
  );
}

export default withContext(App);
