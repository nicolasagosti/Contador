import './App.css';
import full  from "./imagenes/full.svg";
import {Boton} from "./componentes/Boton";
import Contador from './componentes/Contador';
import {useState} from 'react';

function App() {

  const [numClics,setNumClics] = useState(0); 
  const manejarClic = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarClic = () => {
     setNumClics(0);
    }
 
  return (
    <div className="App">
     <div className='full-logo-contenedor'>
        <img className='full-logo' src={full}
        alt='logo de full' />
     </div>
     <div className='contenedor-principal'> 
      <Contador numClics={numClics}>
      </Contador>
      <div className='contenedor-botones'>
      <Boton
      texto='Clic'
      esBotonDeClic={true}
      manejarClic={manejarClic}className='clic'/> 
      <Boton
      texto='Reiniciar'
      esBotonDeClic={false}
      manejarClic={reiniciarClic}/> 
      </div>
     </div>
    </div>
  );
}

export default App;
