import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import Home from './Home';

function App() {
  const titulo = "Dentro de react (babel) puedo utilizar variables"
  const v1 = "de esta manera tu puedes usar variables dentro de un codigo muy similar a HTML"
  const v2 = 50;
  const v3 = "http://www.google.com"
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
