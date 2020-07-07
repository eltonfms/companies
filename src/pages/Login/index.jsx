import React from 'react';

import LogoHome from '../../components/Logo/LogoHome';

const Login = () => {
  return (
    <section className="page b-4">
      <div className="login">
        <LogoHome />
        <h1 className="title -larger center">
          <span>Bem-vindo ao <br/>Empresas</span>
        </h1>
      </div>
    </section>
  );
};

export default Login;