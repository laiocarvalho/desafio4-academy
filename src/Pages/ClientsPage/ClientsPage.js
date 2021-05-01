import React from 'react';
import PagesHeader from '../../Components/PagesHeader/PagesHeader';
import search from '../../Assets/Images/Search.svg';
export default function ClientsPage() {
  return (
    <>
      <PagesHeader />
      <div className="add-client-search-container">
        <button className="unfilled-button">Adicionar Cliente</button>
        <div className="search-input-button-container">
          <input placeholder="Buscar por nome email ou cpf" />
          <button>
            <img src={search} alt="#" />
            Buscar
          </button>
        </div>
      </div>
    </>
  );
}
