import React from 'react';

import LogoHome from '../../components/Logo/LogoHome';
import LoginIntro from '../../components/Login/Intro';
import LoginForm from '../../components/Login/Form';

const Login = () => {
  return (
    <section className="page b-4">
      <div className="login">
        <LogoHome />
        <LoginIntro />
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;