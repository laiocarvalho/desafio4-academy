import React from 'react';

export default function Button({ className, text, width, disabled }) {
  return (
    <>
      <button
        onClick={() => alert('clicou')}
        className={className}
        disabled={disabled === true ? true : false}
        style={{
          width: `${width}`,
          opacity: `${disabled === true ? '35%' : '100%'}`,
        }}
      >
        {text}
      </button>
    </>
  );
}
