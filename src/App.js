import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Operador from './componentes/Operador';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Luca',
      corPrimaria: '#0000FF',
      corSecundaria: '#F5FFFA'
    }, 
    {
      nome: 'Leo',
      corPrimaria: '#B22222',
      corSecundaria: '#000000'
    }, 
    {
      nome: 'Osma',
      corPrimaria: '#F8F8FF',
      corSecundaria: '#000000'
    }, 
    {
      nome: 'Jorge',
      corPrimaria: '#708090',
      corSecundaria: '#F5FFFA'
    }, 
    {
      nome: 'Eder',
      corPrimaria: '#1C1C1C',
      corSecundaria: '#F8F8FF'
    }, 
    {
      nome: 'Vini',
      corPrimaria: '#A52A2A',
      corSecundaria: '#006400'
    }, 
    {
      nome: 'Abud',
      corPrimaria: '#1C1C1C',
      corSecundaria: '#F8F8FF'
    }
  ]

  const [operadores, setOperadores] = useState ([])

  const aoNovoOperadorAdicionado = (Operador) => {
    setOperadores([...operadores, Operador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario Player={times.map(time => time.nome)} aoOperadorCadastrado={aoNovoOperadorAdicionado }/>

    {times.map(time => <Time 
     key={time.nome}
     nome={time.nome} 
     corPrimaria={time.corPrimaria} 
     corSecundaria={time.corSecundaria}
     operadores={operadores.filter(operador => operador.time == time.nome)}
     /> )}

    
      
    </div>
  );
}

export default App;

