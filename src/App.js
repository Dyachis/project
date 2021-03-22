import './App.css';
import Header from './blocs/1_top/Header'
import Calendar from './components/Calendar'

import Footer from './blocs/3_bot/Footer'
import Mid from './blocs/2_mid/Mid'
import PlaceFinder from './blocs/2_mid/PlaceFinder'

function App() {
  return (
    <>
    <Header/>
    <PlaceFinder/>
    <Calendar/>
    <Mid/>
    <Footer/>
    </>
  );
}

export default App;
