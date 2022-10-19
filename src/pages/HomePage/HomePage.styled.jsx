import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingTitle = styled.h1`
  margin: 15px 0;
`;

export const TrendingUl = styled.ul`
  padding-left: 30px;
  color: blue;
`;

export const TrendingLi = styled.li`

  &:not(:last-child) {
    margin-bottom: 3px;
  }
`;

export const TrendingLink = styled(Link)`
  text-decoration: none;
  color: blue;
  &:hover,
  &:focus {
    color: orange;
    font-weight: 700;
  }
`;
