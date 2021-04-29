import React, { useState } from 'react';
import Button from '../../Components/Buttons/Button';
import LogoAcademy from '../../Assets/Images/Logo-Academy.svg';
import ClosedEye from '../../Assets/Images/Closed-Eye.svg';
import OpenEye from '../../Assets/Images/Open-Eye.svg';
export default function Signup() {
  const [hiddenPassword, setHiddenPassword] = useState(false);

  return (
    <>
      <form className="container-form">
        <img src={LogoAcademy} alt="Logo Cubos Academy" />
        <div className="container-form-wrapper-inputs">
          <label>Nome</label>
          <br />
          <input />
        </div>
        <div className="container-form-wrapper-inputs">
          <label>E-mail</label>
          <br />
          <input placeholder="exemplo@gmail.com" />
        </div>
        <div className="container-form-wrapper-inputs">
          <label>Senha</label>
          <br />
          <div className="password-input-icon-container">
            <input
              placeholder="exemplo@gmail.com"
              type={hiddenPassword ? 'password' : 'text'}
            />
            <button
              type="button"
              onClick={() => setHiddenPassword(!hiddenPassword)}
            >
              {hiddenPassword ? <img src={ClosedEye} /> : <img src={OpenEye} />}
            </button>
          </div>
        </div>
        <Button
          className="primary-button form-button-logins-adjust-margin"
          text="Criar Conta"
          width="200px"
          disabled={true}
        />
      </form>
      <div className="signup-link-wrapper">
        Já possui uma conta? <span>Acesse agora!</span>
      </div>
    </>
  );
}
