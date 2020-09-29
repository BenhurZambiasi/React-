import React from 'react';
import { GlobalContext } from './GlobalContext';


const Produto = () => {
  const global = React.useContext(GlobalContext);


  return (
    <div>
      Produto: {global.contar}
      <button style={{ margin: '.5rem' }} onClick={() => global.adicionarUm()}>Adicionar Um</button>
      <button onClick={() => global.adicionarDois()}>Adicionar Dois</button>
    </div>
  );
};

export default Produto;