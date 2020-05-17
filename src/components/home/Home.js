import React from 'react';

import { Link } from 'react-router-dom';

function Home(props) {
  console.log(props);
  return (
    <div>
      <h1 id="titulo">{'Pagina de registro nuevos clientes'}</h1>
      <ol>
        <li>
          <Link to="/signIn">{'Página de ingreso'}</Link>
        </li>
        <li>
          <Link to="/signUp">{'Registro'}</Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
