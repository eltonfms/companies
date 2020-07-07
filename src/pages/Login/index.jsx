import React from 'react';

import LogoHome from '../../components/Logo/LogoHome';
import LoginIntro from '../../components/Login/Intro';

const Login = () => {
  return (
    <section className="page b-4">
      <div className="login">
        <LogoHome />
        <LoginIntro />
      </div>
    </section>
  );
};

export default Login;