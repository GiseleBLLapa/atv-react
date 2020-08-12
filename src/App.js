import React, { useState } from 'react';
import Tabela from './Tabela'
import Form from './Form'

const App = () => {
  const [nomes, setNomes] = useState([]);

  function addNovoNome(nome) {
    const nomesCopy = Array.from(nomes);
    nomesCopy.push({id: nomes.length, value: nome});
    setNomes(nomesCopy);
  }

  function updateNome({target}, index) {
    const nomesCopy = Array.from(nomes);
    nomesCopy.splice(index, 1, { id: index, value: target.value });
    setNomes(nomesCopy);
  }

  function deleteNome(index) {
    const nomesCopy = Array.from(nomes);
    nomesCopy.splice(index, 1);
    setNomes(nomesCopy);
  }

  return (
    <div className="App">
      <div className="App-header">
        <Form onSubmit={addNovoNome} />
        {nomes.map(({id, value}, index) => (
          <Tabela
            key={id}
            value={value}
            onChange={(event) => updateNome(event, index)}
            onDelete={() => deleteNome(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
