import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../Interface/Loading';

const LoginForm = () => {
  const [fail, setFail] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const { handleSubmit, register, errors } = useForm();

  const handleLogin = () => {
    setLoginLoading(true);
    try {
      setTimeout(function () {
        setLoginLoading(false);
        setFail(true);
      }, 1000);
    } catch (err) {
      setTimeout(function () {
        setLoginLoading(false);
        setFail(true);
      }, 1000);
    } finally { }
  };

  const onSubmit = () => {
    handleLogin();
  };

  return (
    <>
      <div className="login -form">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form -group w-350 m-auto">
            <div className="form -item -email">
              <i className="icon -letter"></i>
              <input 
                type="email" 
                name="email" 
                id="email"
                placeholder="E-mail"
                autoComplete="off"
                ref={register({
                  required: 'Por favor preencha o e-mail.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "* E-mail inválido. Por favor preencha novamente."
                  }
                })}
              />
              { errors.email &&
                <div className="form -message -error">
                  <p className="text -smaller c-alert">
                    {errors.email.message}
                  </p>
                </div>
              }
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
            { fail &&
              <div className="form -message -error">
                <p className="text -smaller c-alert">
                  Credenciais informadas são inválidas, tente novamente.
                </p>
              </div>
            }
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
        </form>
      </div>
      { loginLoading && 
        <Loading />
      }
    </>
  );
};

export default LoginForm;