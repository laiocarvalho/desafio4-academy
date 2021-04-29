import React, { useState } from 'react';
import OpenEye from '../../Assets/Images/Open-Eye.svg';
import ClosedEye from '../../Assets/Images/Closed-Eye.svg';

export default function LoginInputs({
  label,
  placeholder,
  type,
  width,
  height,
  className,
  getValue,
}) {
  const [hiddenPassword, sethiddenPassword] = useState(true);
  const [valor, setValor] = useState();

  function handle(e) {
    setValor(e.target.value);
    console.log(valor);
  }

  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        className={className}
        placeholder={placeholder}
        type={type === undefined ? 'text' : type}
        type={type === 'password' && hiddenPassword ? 'password' : 'text'}
        width={width}
        height={height}
        onInput={getValue !== undefined ? handle : null}
        value={getValue !== undefined ? valor : null}
        onBlur={
          getValue !== undefined
            ? () => {
                getValue(valor);
              }
            : null
        }
      />
      {type === 'password' ? (
        <button
          type="button"
          className="bot"
          onClick={() => {
            sethiddenPassword(!hiddenPassword);
          }}
        >
          <img src={hiddenPassword ? ClosedEye : OpenEye} />
        </button>
      ) : (
        ''
      )}
    </div>
  );
}
