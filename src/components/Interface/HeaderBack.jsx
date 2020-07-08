import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderBack = () => {

  return (
    <div className="header -wrap">
      <div className="header -back">
        <NavLink to="/resultado" className="button -clean">
          <i className="icon -back"></i>
        </NavLink>
      </div>
      <div className="header -title">
        <h1 className="title -larger c-white -upper -regular">Empresa1</h1>
      </div>
    </div>
  );
};

export default HeaderBack;
