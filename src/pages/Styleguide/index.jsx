import React from 'react';

const Styleguide = () => {
  return (
    <>
      <h1>Empresas Styleguide</h1>

      <div>

        {/*
        <div className="logo">
          <div className="logo -main">
            <img src={require('../../assets/images/logo-home@2x.png')} alt="Ioasys" />
          </div>
          <div className="logo -inverse">
            <img src={require('../../assets/images/logo-nav@2x.png')} alt="" />
          </div>
        </div>
        */}

        <div className="title">
          <h1 className="title -larger">
            Título Nível 1
          </h1>
          <h2 className="title -median">
            Título Nível 2
          </h2>
          <h3 className="title -smaller">
            Titúlo Nível 3
          </h3>
        </div>

        <div className="icon">
          <i className="icon -letter"></i>
        </div>

        <div className="icon">
          <i className="icon -padlock"></i>
        </div>

        <div className="icon">
          <i className="icon -eye"></i>
        </div>

        <div className="icon">
          <i className="icon -search"></i>
        </div>

        <div className="icon">
          <i className="icon -back"></i>
        </div>

        <div className="icon">
          <i className="icon -close"></i>
        </div>

        <div className="picture">
          <div className="picture -placeholder">
            <div className="picture -aspect d-388-147">
              <div className="picture -figure">
                <span>E1</span>
              </div>
            </div>
          </div>
          <br />
          <div className="picture -placeholder">
            <div className="picture -aspect d-293-160">
              <div className="picture -figure">
                <span>E1</span>
              </div>
            </div>
          </div>
          <br />
          <div className="picture -placeholder">
            <div className="picture -aspect d-293-160">
              <div className="picture -figure">
                <img src={require('../../assets/images/temp/temp-company.jpg')} alt="Empresa" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="text">
          <p className="text -larger">
            A antiga Teoria dos Atos de Comércio decorrente da chamada codificação napoleônica nunca definiu muito bem o que eram as atividades mercantis, os chamados atos de comércio. A definição do que eram os atos de comércio não convenceu a doutrina, pois muitas atividades não eram consideradas comerciais por razões históricas, como era o caso da negociação de bens imobiliários. Além disso, com a constante inovação tecnológica do mercado, diversas novas atividades foram surgindo, mas não eram enumeradas como atos de comércio pela lentidão do processo legislativo.
          </p>
          <p className="text -median">
            Entre para se manter melhor informado sobre o sistema Empresas.
          </p>
          <p className="text -smaller">
            Credenciais informadas são inválidas, tente novamente.
          </p>
          <p className="text -info">
            Clique na busca para iniciar.
          </p>
        </div>

        <div className="button">
          <button type="button" className="button -link -primary">
            <span>Entrar</span>
          </button>
        </div>

      </div>
    </>
  );
};

export default Styleguide;