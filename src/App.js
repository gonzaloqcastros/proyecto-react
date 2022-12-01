import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludo={"Bienvenido!"}/>
    </div>
  );
}

export default App;
