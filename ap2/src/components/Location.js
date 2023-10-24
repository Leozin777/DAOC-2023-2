import React, { useState } from 'react';

function Location({ onClick }) {
  const [cepData, setCepData] = useState(null);
  const [mostrarDados, setMostrarDados] = useState(false);

  const fetchCepData = async () => {
    const response = await fetch('https://viacep.com.br/ws/95560000/json/');
    if (response.ok) {
      const data = await response.json();
      setCepData(data);
      setMostrarDados(true);
    } else {
      setMostrarDados(false);
    }
  };

  const handleClickLocalizacao = () => {
    if (!mostrarDados) {
      fetchCepData();
    } else {
      setMostrarDados(!mostrarDados);
    }
  };

  return (
    <>
      <button type="button" className="location" onClick={handleClickLocalizacao}>Localização</button>

      {mostrarDados && cepData && (
        <div className="dados">

          <div className="dados-container">
            <div className="dados-row">
              <div>
                <p className='dados-p'>CEP: {cepData.cep}</p>
              </div>
              <div>
                <p className='dados-p'>Cidade: {cepData.localidade}</p>
              </div>
            </div>
            <div className="dados-row">
              <div>
                <p className='dados-p'>Rua: {"Coronel Paxeco"}</p>
              </div>
              <div>
                <p className='dados-p'>Número: {"334"}</p>
              </div>
            </div>
            <div className="dados-row">
              <div>
                <p className='dados-p'>Bairro: {"Centro"}</p>
              </div>
              <div>
                <p className='dados-p'>Horário: {"21:30"}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>

  );
}

export default Location;