import './App.css';
import Button from './components/styled/Button'

const theme = {
  color: '#0F4C81',
  background: '#ffff'
}

function App() {
  return (
    <div className="App">Hello World
      <Button primary>Sing up</Button>
      <Button>Find place</Button>
    </div>
  );
}

export default App;
