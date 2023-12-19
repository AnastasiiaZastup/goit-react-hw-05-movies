import { styled } from 'styled-components';

export const Pages = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  border-bottom: solid #a2a2a2 1px;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
`;

export const ListIt = styled.li`
  min-width: 182px;
  font-size: 14px;
  padding: 6px;
  max-width: min-content;

  img {
    max-width: 182px;
  }
`;
