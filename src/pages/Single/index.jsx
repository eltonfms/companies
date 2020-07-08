import React from 'react';
import HeaderBack from '../../components/Interface/HeaderBack';

const Single = () => {
  return (
    <section className="page b-4">
      <HeaderBack />
      <div className="grid -container h-full offset-header">
        <div className="grid -wrap h-full">
          <div className="grid -col">
            <div className="card mt-3 mb-3">
              <div className="card -single">
                <div className="card mb-3">
                  <div className="picture -placeholder">
                    <div className="picture -aspect d-388-147">
                      <div className="picture -figure">
                        <span>E1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card -info">
                  <div className="text -larger c-support">
                    <p>
                      A antiga Teoria dos Atos de Comércio decorrente da chamada codificação napoleônica nunca definiu muito bem o que eram as atividades mercantis, os chamados atos de comércio. A definição do que eram os atos de comércio não convenceu a doutrina, pois muitas atividades não eram consideradas comerciais por razões históricas, como era o caso da negociação de bens imobiliários. Além disso, com a constante inovação tecnológica do mercado, diversas novas atividades foram surgindo, mas não eram enumeradas como atos de comércio pela lentidão do processo legislativo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Single;