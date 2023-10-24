import React, { useState } from 'react';

function Forms({ onCadastro }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [egresso, setEgresso] = useState(false);
  const [pago, setPago] = useState(false);
  const [fotoURL, setFotoURL] = useState('');

  const handleCadastro = () => {
    const EgressoConvidado = egresso ? 'Egresso/Convidado' : 'Estudante';
    const confirmado = pago ? 'Confirmado' : 'Não Confirmado';
    
    const usuario = {
      nome,
      telefone,
      egresso: EgressoConvidado,
      pago: confirmado,
      fotoURL
    };

    onCadastro(usuario);
    setNome('');
    setTelefone('');
    setEgresso(false);
    setPago(false);
    setFotoURL('');
  };

  return (
    <div className="forms-container">
      <form>
        <div>
          <label>Nome</label>
          <input className='forms-campoPreenchimento' type="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} required/>
        </div>
        <div>
          <label>Telefone</label>
          <input className='forms-campoPreenchimento' type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required/>
        </div>

        <div className="radio-group">
          <label>Egresso/Convidado:</label>
            <div>
              <input type="radio" id="egressoSim" checked={egresso} onChange={() => setEgresso(true)} value={"Sim"}/>
              <label for="egressoSim">Sim</label>
              <input type="radio" id="egressoNao" checked={!egresso} onChange={() => setEgresso(false)} value={"Não"}/>
              <label for="egressoNao">Não</label>
            </div>
        </div>

        <div className="grupo-de-elementos">
          <label>Pago:</label>
          <div>
              <input type="radio" id="pagoSim" checked={pago} onChange={() => setPago(true)} />
              <label for="pagoSim">Sim</label>
              <input type="radio" name="pagoNao" checked={!pago} onChange={() => setPago(false)}/>
              <label for="pagoNao">Não</label>
          </div>
        </div>

        <div className="grupo-de-elementos">
          <label>Foto</label>
          <input className='forms-campoPreenchimento' type="text" placeholder="URL da imagem" value={fotoURL} onChange={(e) => setFotoURL(e.target.value)}/>
        </div>

        <button type="button" className="button-forms" onClick={handleCadastro}>Cadastrar</button>
      </form>
    </div>
  );
}

export default Forms;
