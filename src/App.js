import './App.css';
import Header from './blocs/1_top/Header'
import Footer from './blocs/3_bot/Footer'
import Mid from './blocs/2_mid/Mid'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <>
        <Header/>
        <Mid/>
        <Footer/>
    </>
  );
}

export default App;
