import React from 'react';

import LogoHome from '../../components/Logo/LogoHome';
import LoginIntro from '../../components/Login/Intro';
import LoginForm from '../../components/Login/Form';

const Login = () => {
  return (
    <section className="page b-4">
      <div className="grid -container h-full">
        <div className="grid -wrap -center h-full">
          <div className="grid -col">
            <div className="login">
              <LogoHome />
              <LoginIntro />
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;