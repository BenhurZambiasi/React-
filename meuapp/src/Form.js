import React from 'react'

const Form = () => {
  const [nome, setNome] = React.useState(' ');
  const [email, setEmail] = React.useState(' ');

  function handleSubmit(event) {
    event.preventDefault();
  }

  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  })

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" value={nome} type="text" onChange={(event) => setNome(event.target.value)} />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" value={email} type="email" onChange={(event) => setEmail(event.target.value)} />
        <button>Enviar</button>
      </form>
      <p>-----***------</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" value={form.nome} type="text" onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" value={form.email} type="email" onChange={handleChange} />
        <button>Enviar</button>
      </form>
    </div>

  );
};

export default Form;
