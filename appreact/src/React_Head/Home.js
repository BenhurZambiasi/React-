import React from 'react'
// import Head from './Head';
import { Helmet } from 'react-helmet';


const Home = () => {
  return (
    <div>
      {/* <Head title="Home" description="Essa é a descrição da Home" /> */}
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Essa é a descrição da Home" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a Home</p>

    </div>
  )
}

export default Home
