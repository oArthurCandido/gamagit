import styled from 'styled-components';

export const Container = styled.div`
  max-width: 720px;
  margin: auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  text-shadow: 2px 3px 7px rgba(1, 1, 1, 0.54);
  font-family: sans-serif;
  color: #333;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
`;
export const ListItem = styled.li`
  margin: 0.5rem 0;
  background-color: black;
  color: white;
  padding: 0.8rem;
  border-radius: 10px;
`;
export const Button = styled.button`
  width: 100%;
  margin: auto;
  color: black;

  background-color: green;
  color: white;
  padding: 0.8rem;
  border-radius: 10px;
`;
