import React from 'react';
import WhiteLogo from '../../Assets/Images/WhiteLogo.svg';
import Home from '../../Assets/Images/Home.svg';
import Money from '../../Assets/Images/Money.svg';
import Group from '../../Assets/Images/Group.svg';
export default function SideMenu() {
  return (
    <div className="sideMenu-container">
      <img src={WhiteLogo} className="sideMenu-logo" />
      <nav className="sideMenu-nav">
        <ul>
          <li>
            <div>
              <img src={Home} />
            </div>
            Home
          </li>
          <li>
            <div>
              <img src={Money} />
            </div>
            Cobranças
          </li>
          <li>
            <div>
              <img src={Group} />
            </div>
            Clientes
          </li>
        </ul>
      </nav>
      <button className="primary-button">Cadastrar cobrança</button>
    </div>
  );
}
