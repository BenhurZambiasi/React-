import React from 'react';
/*
  Mostre os dados da aplicação
  Não utilize CSS externo, use o style para mudar as cores,
  Se a situação estiver ativa pinte de verde, inativa vermelho,
  Se o gasto for maior que 10000 mostre uma mensagem.

*/

function Exerc() {

  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    activa: true,
  };

  // const mario = {
  //   cliente: 'Mario',
  //   idade: 31,
  //   compras: [
  //     { nome: 'Notebook', preco: 'R$ 2500' },
  //     { nome: 'Geladeira', preco: 'R$ 3000' },
  //     { nome: 'Smartphone', preco: 'R$ 1500' },
  //     { nome: 'Guitarra', preco: 'R$ 3500' },
  //   ],
  //   activa: false,
  // };
  const dados = luana;
  // use o map( ) para pegar os preços, use o replace( )para trocar o cifrão e o espaço por vazio, acrescente o Number( ) para tranformar em numeros ou acrescente o "+", use o reduce( ) para somar todos os preços.
  const total = dados.compras.map(item => Number(item.preco.replace("R$ ", ' '))).reduce((a, b) => a + b);
  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p >Situação: <span style={{ color: dados.activa ? 'green' : 'red' }}>{dados.activa ? 'Ativa' : 'Inativa'}</span></p>
      <p >Total gasto: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </>
  );
};

export default Exerc();
