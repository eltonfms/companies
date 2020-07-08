import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Interface/Header';

const SearchResult = () => {
  return (
    <section className="page b-4">
      <Header result />
      <div className="grid -container h-full offset-header">
        <div className="grid -wrap h-full">
          <div className="grid -col">
            <div className="card mt-3 mb-3">
              <NavLink to="/single" className="card -link">
                <div className="card -image">
                  <div className="picture -placeholder">
                    <div className="picture -aspect d-293-160">
                      <div className="picture -figure">
                        <span>E1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card -text">
                  <h2 className="title -larger">Empresa1</h2>
                  <h3 className="title -category c-support">Negócio</h3>
                  <span className="text -median c-support">Brasil</span>
                </div>
              </NavLink>
            </div>
            <div className="card mt-3 mb-3">
              <NavLink to="/single" className="card -link">
                <div className="card -image">
                  <div className="picture -placeholder">
                    <div className="picture -aspect d-293-160">
                      <div className="picture -figure">
                        <img src={require('../../assets/images/temp/temp-company.jpg')} alt="Empresa" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card -text">
                  <h2 className="title -larger">Empresa2</h2>
                  <h3 className="title -category c-support">Finanças</h3>
                  <span className="text -median c-support">Colômbia</span>
                </div>
              </NavLink>
            </div>
            <div className="card mt-3 mb-3">
              <NavLink to="/single" className="card -link">
                <div className="card -image">
                  <div className="picture -placeholder">
                    <div className="picture -aspect d-293-160">
                      <div className="picture -figure">
                        <span>E3</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card -text">
                  <h2 className="title -larger">Empresa3</h2>
                  <h3 className="title -category c-support">Agricultura</h3>
                  <span className="text -median c-support">Argentina</span>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResult;