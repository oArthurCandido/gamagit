import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

function App(props) {
  const history = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map(repository => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem(
          'repositoriesName',
          JSON.stringify(repositoriesName)
        );
        setErro(false);
        history('/repositories', { replace: true });
      })
      .catch(err => {
        setErro(true);
      });
  }
  return (
    <>
      <S.Title>{usuario}</S.Title>
      <input
        placeholder="Usuário"
        className="usuarioInput"
        value={usuario}
        onChange={e => setUsuario(e.target.value)}
      />
      <button type="button" onClick={handlePesquisa}>
        Pesquisar
      </button>
      {erro ? <p>Ocorreu um erro, tente novamente</p> : ''}
    </>
  );
}

export default App;
