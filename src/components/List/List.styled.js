import styled from 'styled-components';

export const Lists = styled.ul`
  margin-top: 12px;
`;
export const ItemFilms = styled.li`
  font-weight: 400;
  font-size: 20px;
  color: #red;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  a:hover,
  a:focus {
    background-color: #red;
    color: #red;
  }

  a {
    display: block;
    padding: 16px 16px;
  }
`;
