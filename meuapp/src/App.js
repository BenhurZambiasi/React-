
import React from 'react'
import UseRef from './UseRef';
import UserContext from './UserContext/UserContext';
import Exerc01 from './Exerc_01';
import Exerc02 from './Exerc_02';
import Exerc03 from './Exerc03/Exerc_03';
import Exerc04 from './Exerc04/Exerc_04';
import Exerc05 from './Exerc05/Exerc_05';
import Exerc06 from './Exerc06/Exerc_06';
import Form from './Form';
import Exerc07 from './Exerc07/Exerc_07';
import Desafio from './DesafioForm/Desafio';


const App = () => {


  //   return
  // }

  return (
    <>
      <h1>Desafio Form</h1>
      <Desafio />
      <hr />
      <h1>Form imput</h1>
      <Form />
      <hr />
      <h1>UseContext</h1>
      <UserContext />
      <hr />
      <h1>UseRef</h1>
      <UseRef />
      <hr />
      <h1>Exercício 01</h1>
      <Exerc01 />
      <hr />
      <h1>Exercício 02</h1>
      <Exerc02 />
      <hr />
      <h1>Exercício 03</h1>
      <Exerc03 />
      <hr />
      <h1>Exercício 04</h1>
      <Exerc04 />
      <hr />
      <h1>Exercício 05</h1>
      <Exerc05 />
      <hr />
      <h1>Exercício 06</h1>
      <Exerc06 />
      <h1>Exercício 07</h1>
      <Exerc07 />
    </>)

}
export default App;
