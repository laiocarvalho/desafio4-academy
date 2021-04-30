import React from 'react';
import Profile from '../../Assets/Images/Profile.svg';
import DolarSign from '../../Assets/Images/dolar-sign.svg';
export default function PagesHeader() {
  return (
    <div className="pages-header">
      <div className="balance-information">
        <span>
          <img src={DolarSign} />
          Saldo em conta
        </span>
        <p>R$ 0,00</p>
      </div>
      <button className="profile-image">
        <img src={Profile} />
      </button>
    </div>
  );
}
