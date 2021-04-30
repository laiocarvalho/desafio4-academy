import React from 'react';
import Group from '../../Assets/Images/Group.svg';
import Money from '../../Assets/Images/Money.svg';
import PagesHeader from '../../Components/PagesHeader/PagesHeader';
import chart from '../../Assets/Images/Chart.svg';
function ClientsInfoGeneralContainer({ text, color, number, border }) {
  return (
    <div
      className="clients-charge-information-container"
      style={{
        border: `${border}`,
        color: `${color}`,
      }}
    >
      <span
        style={{
          color: `${color}`,
        }}
      >
        {text}
      </span>
      <span
        className="number"
        style={{
          color: `${color}`,
        }}
      >
        {number}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <PagesHeader />
      <div className="Home-period-filter-div">
        <ul>
          <li>Este mês</li>
          <li>Este ano</li>
          <li>Desde o início</li>
        </ul>
      </div>
      <div className="home-main-wrapper">
        <div className="home-content-container">
          <header>
            <img src={Group} />
            Clientes
          </header>
          <ClientsInfoGeneralContainer
            border="2px solid red"
            color="red"
            text="Em dia"
            number="0"
          />
          <ClientsInfoGeneralContainer
            border="2px solid #4EC06E"
            color="#4EC06E"
            text="Inadimplentes"
            number="0"
          />
        </div>
        <div className="home-content-container">
          <header>
            <img src={Money} />
            Cobranças
          </header>
          <ClientsInfoGeneralContainer
            border="2px solid #5197B5"
            color="#5197B5"
            text="Previstas"
            number="0"
          />
          <ClientsInfoGeneralContainer
            border="2px solid red"
            color="red"
            text="Vencidas"
            number="0"
          />
          <ClientsInfoGeneralContainer
            border="2px solid #4EC06E"
            color="#4EC06E"
            text="Pagas"
            number="0"
          />
        </div>
      </div>
      <div className="home-chart-container">
        <header>
          <img src={chart} />
          Faturamento
        </header>
      </div>
    </>
  );
}
