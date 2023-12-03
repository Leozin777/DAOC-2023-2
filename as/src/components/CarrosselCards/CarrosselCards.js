import './CarrosselCards.css'
import { useState, useEffect } from 'react';
import Card from '../Card/Card';

function CarrosselCards(){
  
    const cards = data.map((item, index) => (
      <Card nome={item.nome} tipo={item.tipo} pagamento={item.pago} imagem={item.img} key={index} />
    ));
  
    return (
      <div className='card-container'>
        {cards}
      </div>
    );
}

export default CarrosselCards