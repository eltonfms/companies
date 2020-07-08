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
      }, 3000);
    } catch (err) { } finally {  }
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
              <div className="form -field">
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
                      message: "E-mail inválido. Por favor preencha novamente."
                    }
                  })}
                />
                <span className="form -alert">!</span>
              </div>
              { errors.email &&
                <div className="form -message -error">
                  <p className="text -smaller c-alert">
                    {errors.email.message}
                  </p>
                </div>
              }
            </div>
            <div className="form -item -password">
              <div className="form -field">
                <i className="icon -padlock"></i>
                <input 
                  type="password" 
                  name="password" 
                  id="password"
                  placeholder="Senha"
                />
                <span className="form -alert">!</span>
              </div>
            </div>
            { fail &&
              <div className="form -message -error mb-2">
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