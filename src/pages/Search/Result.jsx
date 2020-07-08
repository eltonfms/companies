import React from 'react';
import Header from '../../components/Interface/Header';

const SearchResult = () => {
  return (
    <section className="page b-4">
      <Header result />
      <div className="grid -container h-full offset-header">
        <div className="grid -wrap h-full">
          <div className="grid -col">
            <div className="card">
              <a href="">
                <h2>Empresa1</h2>
                <h3>Negócio</h3>
                <span>Brasil</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResult;