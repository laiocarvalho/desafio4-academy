import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Components/Buttons/Button';
import LogoAcademy from '../../Assets/Images/Logo-Academy.svg';
import Mail from '../../Assets/Images/Mail.svg';

export default function ForgotPassword() {
  const [submit, setSubmit] = useState(false);
  const { register, handleSubmit, watch } = useForm();
  const email = watch('Email');

  return (
    <>
      <form className="container-form container-password-page">
        <img src={LogoAcademy} alt="Logo Cubos Academy" />
        {submit ? (
          <>
            <img src={Mail} className="recovery-password-email-image" />
            <h3>Confira seu Email</h3>
            <p className="sent-email-message">
              Enviamos as instruções para recuperação de senha
            </p>
            <Button
              className="unfilled-button container-form-recovery-password-text"
              text="Ok, entendi"
              width="220px"
            />
          </>
        ) : (
          <>
            <p className="container-form-recovery-password-text">
              Informe o e-mail associado a sua conta e vamos te enviar
              instruções para resetar sua senha
            </p>
            <div className="container-form-wrapper-inputs">
              <label>E-mail</label>
              <br />
              <input placeholder="exemplo@gmail.com" {...register('Email')} />
            </div>
            <Button
              text="Recuperar senha"
              className="primary-button form-button-logins-adjust-margin"
              disabled={email ? false : true}
            />
          </>
        )}
      </form>
    </>
  );
}
