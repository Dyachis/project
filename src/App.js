import './App.css'
import Header from './blocs/1_top/Header'
import Footer from './blocs/3_bot/Footer'
import Mid from './blocs/2_mid/Mid'
import AppContainer from './blocs/style/containers/AppContainer'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AppContainer>
      <AuthProvider>
        <Header />
        <Mid />
      </AuthProvider>
      <Footer />
    </AppContainer>
  )
}

export default App
