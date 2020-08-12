import React from 'react';

const ListaNome = ({ onChange, onDelete, value }) => {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
      />
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default ListaNome;
