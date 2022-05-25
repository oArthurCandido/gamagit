import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './styled';

function Repositories() {
  const history = useNavigate();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName);
  }, []);

  return (
    <S.Container>
      <S.Title>Repositories</S.Title>

      {repositories.map(repository => {
        return (
          <S.List>
            <S.ListItem>{repository}</S.ListItem>
          </S.List>
        );
      })}
      <S.Button>
        <Link to="/">Voltar</Link>
      </S.Button>
    </S.Container>
  );
}

export default Repositories;
