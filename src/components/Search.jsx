/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });
  return (
    <section className="main">
      <h2 className="main__title">¿A dónde quieres ir hoy?</h2>
      <input type="text" className={inputStyle} placeholder="Buscar..." />
    </section>
  );
};

export default Search;