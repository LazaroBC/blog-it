import './App.css';
import Header from './components/Header';
import Usuario from './components/Usuario';

const usuario = {
  usuario: "LLatzy Punky",
  nombre: "Lázaro",
  apellido: "Belloch Canet",
  edad: 55
}

const App= (props) => {

  const usuairo = props.user;
  
  return (
    <div className="App">
      <Header></Header>
      <Usuario user={usuario}></Usuario>
    </div>
  );
}

export default App;
