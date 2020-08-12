import React, { useState } from 'react';
const NovaEntrada = ({ onSubmit }) => {

    const [novoItem, setNovoItem] = useState('');

    function setNovoNome({ target }) {
        setNovoItem(target.value);
    }

    function submit(e) {
        e.preventDefault();
        onSubmit(novoItem);
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    placeholder="Digite um novo nome"
                    onChange={setNovoNome}
                />
                <button type="submit">
                    Adicionar
                </button>
            </form>
        </div>
    )
};

export default NovaEntrada;
