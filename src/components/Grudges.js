import React from 'react';

const Grudges = ({ ids = [] }) => {
  return (
    <section className="Grudges">
      <h2>Grudges ({ids.length})</h2>
      {ids.map(id => null)}
    </section>
  );
};

export default Grudges;
