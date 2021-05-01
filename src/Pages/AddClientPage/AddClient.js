import React from 'react';
import ProfileLogout from '../../Components/ProfileLogout/ProfileLogout';

export default function AddClient() {
  return (
    <>
      <h2>// Adicionar Cliente</h2>
      <div className="addClient-container">
        <div className="addClient-inputs-wrapper">
          <label for="nome">Nome</label>
          <input name="nome" className="addClient-inputs-large" />
          <label for="Email">E-mail</label>
          <input name="Email" className="addClient-inputs-large" />
          <div className="addClient-half-inputs-container">
            <div>
              <label for="cpf">CPF</label>
              <input name="cpf" className="addClient-input-half" />
            </div>
            <div>
              <label for="Telefone">Telefone</label>
              <input name="Telefone" className="addClient-input-half" />
            </div>
          </div>
          <div className="addClient-buttons-container">
            <button className="unfilled-button">Cancelar</button>
            <button className="primary-button" disabled>
              Adicionar Cliente
            </button>
          </div>
        </div>
      </div>
      <ProfileLogout />
    </>
  );
}
