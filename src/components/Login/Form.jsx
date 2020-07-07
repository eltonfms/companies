import React from 'react';

const LoginForm = () => {
  return (
    <div class="login -form">
      <div class="form -group">
        <div class="form -item">
          <input 
            type="email" 
            name="email" 
            id="email"
            placeholder="E-mail"
          />
        </div>
        <div class="form -item">
          <input 
            type="password" 
            name="password" 
            id="password"
            placeholder="Senha"
          />
        </div>
        <div class="form -message -error">
          <p className="text -smaller c-alert">
            Credenciais informadas são inválidas, tente novamente.
          </p>
        </div>
        <div class="form -button">
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