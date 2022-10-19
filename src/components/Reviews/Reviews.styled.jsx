import styled from 'styled-components';

export const ReviewsList = styled.ul`
  padding: 15px;
  list-style: none;
`;

export const ReviewsItem = styled.li`
  padding: 15px;
  border: 1px solid grey;
  border-radius: 10px;

  &::not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ReviewsAuthor = styled.h3`
  margin-bottom: 15px;
`;
