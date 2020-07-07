import React from 'react';

const LoginForm = () => {
  return (
    <div className="login -form">
      <div className="form -group m-auto">
        <div className="form -item -email">
          <i className="icon -letter"></i>
          <input 
            type="email" 
            name="email" 
            id="email"
            placeholder="E-mail"
          />
        </div>
        <div className="form -item -password">
          <i className="icon -padlock"></i>
          <input 
            type="password" 
            name="password" 
            id="password"
            placeholder="Senha"
          />
        </div>
        <div className="form -message -error">
          <p className="text -smaller c-alert">
            Credenciais informadas são inválidas, tente novamente.
          </p>
        </div>
        <div className="form -button m-auto">
          <button
            type="submit"
            name="login"
            className="button -link -primary"
          >
            <span>Entrar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;