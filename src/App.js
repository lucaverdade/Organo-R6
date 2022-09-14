import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Operador from './componentes/Operador';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Luca',
      corPrimaria: '#ccdbed',
      corSecundaria: '#ebe2ed'
    }, 
    {
      nome: 'Leo',
      corPrimaria: '#717978',
      corSecundaria: '#e2e2e2'
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
      corPrimaria: '#145a8d',
      corSecundaria: '#209ad9'
    }, 
    {
      nome: 'Vini',
      corPrimaria: '#6465c8',
      corSecundaria: '#cd8ffa'
    }, 
    {
      nome: 'Abud',
      corPrimaria: '#3b5c82',
      corSecundaria: '#161c31'
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

