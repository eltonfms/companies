import React from 'react';
import Header from '../../components/Interface/Header';

const Search = () => {
  return (
    <section className="page b-4">
      <Header />
      <div className="grid -container h-full offset-header">
        <div className="grid -wrap -center h-full">
          <div className="grid -col">
            <p className="text -info -center">
              Clique na busca para iniciar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;