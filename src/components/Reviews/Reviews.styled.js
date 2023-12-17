import styled from 'styled-components';

export const StyledLists = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ListItems = styled.li`
  font-size: 14px;
  padding: 6px;
  border: solid 1px #red;
  background-color: #red;
  border-radius: 15px;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  span {
    color: #red;
  }
`;
export const ReviewsDescription = styled.p`
  color: #red;
  margin: 10px 0;
`;
