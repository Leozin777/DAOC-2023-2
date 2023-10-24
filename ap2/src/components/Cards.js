import React from 'react';

function Cards({ usuarios }) {
  return (
    <div className="cards-container">
      {usuarios.map((usuario, index) => (
        <div className="card" key={index}>
          <div>
            <img className='image-url' src={usuario.fotoURL} alt={usuario.nome} />
          </div>
          <div>
            <p>Nome: {usuario.nome}</p>
            <p>Telefone: {usuario.telefone}</p>
            <p>Tipo: {usuario.egresso}</p>
            <p>Status: {usuario.pago}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
