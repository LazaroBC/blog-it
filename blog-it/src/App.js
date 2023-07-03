import './App.css';
import Header from './components/Header';
import Usuario from './components/Usuario';
import Entradas from './components/Entradas';
import Footer from './components/Footer';


const usuario = {
  usuario: "LLatzy Punky",
  nombre: "Lázaro",
  apellido: "Belloch Canet",
  edad: 55
}

const App= (props) => {

  
  return (
    <div className="App">
      <Header></Header>
      <Usuario user={usuario}></Usuario>
      <Entradas></Entradas>
      <Footer></Footer>
    </div>
  );
}

export default App;
